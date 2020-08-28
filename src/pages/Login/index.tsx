import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import backgroundImg from '../../assets/images/background.svg';
import introImg from '../../assets/images/intro.svg';
import heartImg from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  const { push } = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('/sessions', { email, password });

      alert('Login realizado com sucesso!');
      push('/');
    } catch {
      alert('Erro ao realizar login!');
    }
  }

  return (
    <div id="page-login">
      <div id="login-logo">
        <img id="login-background" src={backgroundImg} alt="Background"/>
        <img id="login-intro"src={introImg} alt="Intro"/>
      </div>

      <div id="login-content">
        <form onSubmit={handleSubmit}>
          <h1>Fazer login</h1>

          <Input
            name="email"
            label=""
            placeholder="E-mail"
            placeholderAlwaysVisible={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            name="password"
            label=""
            placeholder="Senha"
            placeholderAlwaysVisible={true}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div id="password-remember">
            <Checkbox name="remember" label="Lembrar-me" onChange={() => {}} />
            <a href="/">Esqueci minha senha</a>
          </div>

          <button disabled={!email || !password} type="submit">Entrar</button>
        </form>

        <div id="footer">
          <div>
            <p id="base-text">Não tem conta?</p>
            <a href="/">Cadastre-se</a>
          </div>

          <div>
            <p id="complement-text">
              É de graça
              <img src={heartImg} alt="Coração"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;