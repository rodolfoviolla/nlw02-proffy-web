import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import backPurpleIcon from '../../assets/images/icons/back-purple.svg';
import backgroundImg from '../../assets/images/background.svg';
import introImg from '../../assets/images/intro.svg';

import {
  Container,
  Content, 
  ContentHeader,
  InputStyles,
  SiderContainer,
  Background,
  Logo, 
} from './styles';

interface FormData {
  fistName: string;
  lastName: string;
  email: string;
  password: string;
}

function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = useCallback((data) => {
    console.log(data);
  }, []);

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
            name="fistname"
            label=""
            placeholder="Nome"
            placeholderStyle={'always'}
            autoFocus
          />
          <Input
            inputStyles={InputStyles}
            name="lastname"
            label=""
            placeholder="Sobrenome"
            placeholderStyle={'always'}
          />
          <Input
            inputStyles={InputStyles}
            name="email"
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

          <Button label="Concluir cadastro"/>
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