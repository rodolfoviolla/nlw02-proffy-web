import React, { createContext, useContext, useState } from 'react';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  tokenExpiration: Date;
  user: User;
  remember: boolean;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials, remember: boolean): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Proffy:token');
    const user = localStorage.getItem('@Proffy:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        tokenExpiration: new Date(2020, 1, 1),
        user: JSON.parse(user),
        remember: true,
      }
    }

    localStorage.removeItem('@Proffy:token');
    localStorage.removeItem('@Proffy:user');

    return {} as AuthState;
  });

  async function signIn({ email, password }: SignInCredentials, remember = false) {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user, expiresIn } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
    
    if (remember) {
      localStorage.setItem('@Proffy:token', token);
      localStorage.setItem('@Proffy:user', JSON.stringify(user));
    }

    setData({ token, tokenExpiration: expiresIn, user, remember });
  }

  function signOut() {
    if (data.remember) {
      localStorage.removeItem('@Proffy:token');
      localStorage.removeItem('@Proffy:user');
    }

    setData({} as AuthState);
  }

  function updateUser(user: User) {
    if (data.remember) {
      localStorage.setItem('@Proffy:user', JSON.stringify(user));
    }

    setData({
      token: data.token,
      tokenExpiration: data.tokenExpiration,
      user,
      remember: data.remember,
    });
  }

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };