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
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
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
      }
    }

    localStorage.removeItem('@Proffy:token');
    localStorage.removeItem('@Proffy:user');

    return {} as AuthState;
  });

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user, expiresIn } = response.data;

    localStorage.setItem('@Proffy:token', token);
    localStorage.setItem('@Proffy:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, tokenExpiration: expiresIn, user });
  }

  function signOut() {
    localStorage.removeItem('@Proffy:token');
    localStorage.removeItem('@Proffy:user');

    setData({} as AuthState);
  }

  function updateUser(user: User) {
    localStorage.setItem('@Proffy:user', JSON.stringify(user));

    setData({
      token: data.token,
      tokenExpiration: data.tokenExpiration,
      user,
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