import React, { useState, useCallback, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

import backgroundImg from '../../assets/images/background.svg';
import introImg from '../../assets/images/intro.svg';
import heartImg from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  SiderContainer,
  Background,
  Logo, 
  Content, 
  InputStyles,
  PasswordRemember, 
  Footer, 
  FooterSignUp, 
  FooterMessage,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const { push } = useHistory();
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const [emailIsFilled, setEmailIsFilled] = useState(false);
  const [passwordIsFilled, setPasswordIsFilled] = useState(false);
  const [isRemembered, setIsRemembered] = useState(false);

  const handleIsEmailFilled = useCallback((value: string) => {
    if (!value && emailIsFilled) {
      setEmailIsFilled(false);
    } else if (value && !emailIsFilled) {
      setEmailIsFilled(true);
    }
  }, [emailIsFilled]);

  const handleIsPasswordFilled = useCallback((value: string) => {
    if (!value && passwordIsFilled) {
      setPasswordIsFilled(false);
    } else if (value && !passwordIsFilled) {
      setPasswordIsFilled(true);
    }
  }, [passwordIsFilled]);

  const handleChange = useCallback(() => {
    setIsRemembered(!isRemembered);
  }, [isRemembered]);

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async ({ email, password}) => {
      try {
        await signIn({
          email,
          password,
        }, isRemembered);

        alert('Login realizado com sucesso!');

        push('/landing');
      } catch {
        alert('Erro ao realizar login!');
      }
    }, [signIn, isRemembered, push]
  );

  return (
    <Container>
      <SiderContainer>
        <Background src={backgroundImg} alt="Background"/>
        <Logo src={introImg} alt="Intro"/>
      </SiderContainer>

      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Fazer login</h1>

          <Input
            inputStyles={InputStyles}
            name="email"
            type="email"
            autoComplete="off"
            label=""
            placeholder="E-mail"
            placeholderStyle={'always'}
            autoFocus
            onChange={(e) => handleIsEmailFilled(e.target.value)}
          />
          <Input
            inputStyles={InputStyles}
            name="password"
            label=""
            placeholder="Senha"
            placeholderStyle={'always'}
            onChange={(e) => handleIsPasswordFilled(e.target.value)}
          />

          <PasswordRemember>
            <label>
              <Checkbox
                label="Lembrar-me"
                checked={isRemembered}
                onChange={handleChange}
              />
            </label>
            
            <a href="/">Esqueci minha senha</a>
          </PasswordRemember>

          <Button label="Entrar" disabled={!emailIsFilled || !passwordIsFilled} />
        </Form>

        <Footer>
          <FooterSignUp>
            <p>Não tem conta?</p>
            <Link to="/signup">Cadastre-se</Link>
          </FooterSignUp>

          <FooterMessage>
            <p>
              É de graça
              <img src={heartImg} alt="Coração"/>
            </p>
          </FooterMessage>
        </Footer>
      </Content>
    </Container>
  );
}

export default Login;