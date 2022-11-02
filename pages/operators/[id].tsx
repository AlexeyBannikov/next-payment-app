import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { TOperator } from '../../@types/types';
import {
  OperatorBlock,
  SubmitButton,
  Title,
  CloseButton,
  PaymentForm,
} from '../../components';
import { Container } from '../../styles';
import { amountValidation, phoneMask, phoneValidation } from '../../utils';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/operators/`);
    const data = await response.json();

    const paths = data.map(({ id }: { id: number }) => ({
      params: { id: id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id;

    const response = await fetch(`${process.env.API_HOST}/operators/${id}`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        operator: data,
      },
    };
  } catch (error) {
    return {
      props: {
        operator: null,
      },
    };
  }
};

type TOperatorProps = {
  operator: TOperator;
};

const Operator: React.FC<TOperatorProps> = ({ operator }) => {
  const [values, setValues] = React.useState({ phone: '', amount: '' });
  const router = useRouter();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneValidation(values.phone) && amountValidation(values.amount)) {
      try {
        const response = await fetch('/api/payment/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: values.phone.replace(/[^+\d]/g, '').substring(1),
            amount:
              values.amount[0] == '0'
                ? values.amount.substring(1)
                : values.amount,
          }),
        });

        if (response.ok) {
          alert('Ваша оплата прошла успешно!');

          setTimeout(() => {
            router.push('/');
          }, 2000);
        } else {
          alert('Возникли проблемы с оплатой, пожалуйста, попробуйте позже');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <CloseButton onClick={() => router.push('/')}>X</CloseButton>
      <Container>
        <Head>
          <title>Оплата телефона</title>
        </Head>
        <PaymentForm onSubmit={handleSubmit}>
          <OperatorBlock
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            margin='0px 0px 20px 0px'>
            <Image
              loader={() => operator.icon}
              unoptimized={true}
              src={operator.icon}
              alt='Operator'
              width={60}
              height={60}
            />
            <Title color='white' fontSize='24px'>
              {operator.name}
            </Title>
          </OperatorBlock>
          <MaskedInput
            mask={phoneMask}
            placeholder='+7 (___) ___-__-__'
            onChange={changeHandler}
            value={values.phone}
            name='phone'
          />
          <input
            maxLength={4}
            placeholder='1-1000₽'
            onChange={changeHandler}
            value={values.amount}
            name='amount'
          />
          <SubmitButton
            disabled={
              phoneValidation(values.phone) && amountValidation(values.amount)
                ? false
                : true
            }>
            Оплатить
          </SubmitButton>
        </PaymentForm>
      </Container>
    </>
  );
};

export default Operator;
