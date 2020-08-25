import React from 'react';

import backgroundImg from '../../assets/images/background.svg';
import introImg from '../../assets/images/intro.svg';

import './styles.css';
import Input from '../../components/Input';

function Login() {
  return (
    <div id="page-login">
      <div id="login-logo">
        <img id="login-background" src={backgroundImg} alt="Background"/>
        <img id="login-intro"src={introImg} alt="Intro"/>
      </div>

      <div id="login-content">
        <form>
          <h1>Fazer login</h1>

          <Input name="email" label="" placeholder="E-mail" />
          <Input name="password" label="" placeholder="Senha" />

          <p>
            <input type="checkbox" name="remember" value="Lembrar-me"/>
            <span>Esqueci minha senha</span>
          </p>

          <button type="submit">Entrar</button>
        </form>

        <div>
          <p>
            Não tem conta?
            <span>É de graça</span>
          </p>
          <p>Cadastre-se</p>
        </div>
      </div>
    </div>
  );
}

export default Login;