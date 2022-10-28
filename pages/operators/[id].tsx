import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { TOperator } from '../../@types/types';
import { OperatorBlock, SubmitButton, Title } from '../../components';
import { CloseButton, Container, PaymentForm } from '../../styles';
import { amountValidation, phoneValidation } from '../../utils/validations';

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
  const [phone, setPhone] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');
  const router = useRouter();
  const phoneMask = [
    '+',
    '7',
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneValidation(phone) && amountValidation(amount)) {
      try {
        const response = await fetch('/api/payment/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: phone.replace(/[^+\d]/g, '').substring(1),
            amount: amount[0] == '0' ? amount.substring(1) : amount,
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
            onChange={handlePhoneChange}
            value={phone}
          />
          <input
            maxLength={4}
            placeholder='1-1000₽'
            onChange={handleAmountChange}
            value={amount}
          />
          <SubmitButton
            disabled={
              phoneValidation(phone) && amountValidation(amount) ? false : true
            }>
            Оплатить
          </SubmitButton>
        </PaymentForm>
      </Container>
    </>
  );
};

export default Operator;
