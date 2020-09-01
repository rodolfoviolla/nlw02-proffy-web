import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import backPurpleIcon from '../../assets/images/icons/back-purple.svg';
import backgroundImg from '../../assets/images/background.svg';
import introImg from '../../assets/images/intro.svg';

import api from '../../services/api';

import {
  Container,
  Content, 
  ContentHeader,
  ButtonContainer,
  InputStyles,
  SiderContainer,
  Background,
  Logo, 
} from './styles';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

function SignUp() {
  const { push } = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async ({ firstname, lastname, email, password }) => {
      try {
        await api.post('/users', {
          firstname,
          lastname,
          email,
          password,
        });

        alert('Cadastro realizado, por favor, efetue seu login.');
        push('/');
      } catch (err) {
        alert('Erro ao realizar seu cadastro.');
      }
    },
  [push]);

  return (
    <Container>
      <Content>
        <ContentHeader>
          <Link to="/">
            <img src={backPurpleIcon} alt="Voltar" />
          </Link>
        </ContentHeader>

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Cadastro</h1>
          <h2>Preencha os dados abaixo para começar</h2>

          <Input
            inputStyles={InputStyles}
            name="firstname"
            label=""
            autoComplete="off"
            placeholder="Nome"
            placeholderStyle={'always'}
            autoFocus
          />
          <Input
            inputStyles={InputStyles}
            name="lastname"
            label=""
            autoComplete="off"
            placeholder="Sobrenome"
            placeholderStyle={'always'}
          />
          <Input
            inputStyles={InputStyles}
            name="email"
            type="email"
            autoComplete="off"
            label=""
            placeholder="E-mail"
            placeholderStyle={'always'}
          />
          <Input
            inputStyles={InputStyles}
            name="password"
            label=""
            placeholder="Senha"
            placeholderStyle={'always'}
            style={{ borderRadius: '0 0 8px 8px' }}
          />
          <ButtonContainer>
            <Button label="Concluir cadastro"/>
          </ButtonContainer>
        </Form>
      </Content>

      <SiderContainer>
        <Background src={backgroundImg} alt="Background"/>
        <Logo src={introImg} alt="Intro"/>
      </SiderContainer>
    </Container>
  );
}

export default SignUp;