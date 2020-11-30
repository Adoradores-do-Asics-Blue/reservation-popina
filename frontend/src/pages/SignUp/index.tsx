import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock, FiClock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  restaurant: string;
  openingHours: number;
  finishingHours: number;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          openingHours: Yup.number()
            .positive('deve ser positivo')
            .moreThan(0, 'Deve ser maior que 0')
            .lessThan(23, 'Deve ser menor do que 23')
            .integer('Deve ser um número inteiro entre 0 e 23'),
          finishingHours: Yup.number()
            .positive('deve ser positivo')
            .moreThan(0, 'Deve ser maior que 0')
            .lessThan(23, 'Deve ser menor do que 23')
            .integer('Deve ser um número inteiro entre 0 e 23'),
        });

        const { name, email, password, openingHours, finishingHours } = data;

        const start = Number(openingHours);
        const finish = Number(finishingHours);

        const numberStartFinish = {
          start,
          finish,
        };

        const userRestaurant: SignUpFormData = {
          name,
          email,
          password,
          restaurant: 'true',
          openingHours: numberStartFinish.start,
          finishingHours: numberStartFinish.finish,
        };

        console.log(userRestaurant);

        await schema.validate(userRestaurant, {
          abortEarly: false,
        });

        await api.post('/users', userRestaurant);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no Popina!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Input
              name="openingHours"
              icon={FiClock}
              type="tel"
              placeholder="horário de abertura"
            />
            <Input
              name="finishingHours"
              icon={FiClock}
              type="tel"
              placeholder="horário de fechamento"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
