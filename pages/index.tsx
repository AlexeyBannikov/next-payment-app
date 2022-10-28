import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { TOperator } from '../@types/types';
import { OperatorBlock, Title } from '../components';
import { Container, ListItem } from '../styles';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/operators/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        operators: data,
      },
    };
  } catch (error) {
    return {
      props: {
        operators: null,
      },
    };
  }
};

type TOperatorsProps = {
  operators: TOperator[];
};

const Operators: React.FC<TOperatorsProps> = ({ operators }) => {
  return (
    <Container>
      <Head>
        <title>Операторы</title>
      </Head>
      <Title textAlign='center'>Выберите сотового оператора</Title>
      <ul>
        {operators &&
          operators.map(({ id, name, icon }) => (
            <ListItem key={id}>
              <Link href={`/operators/${id}`}>
                <OperatorBlock display='flex' alignItems='center'>
                  <Image
                    loader={() => icon}
                    unoptimized={true}
                    src={icon}
                    alt='Operator'
                    width={60}
                    height={60}
                  />
                  <span>{name}</span>
                </OperatorBlock>
              </Link>
            </ListItem>
          ))}
      </ul>
    </Container>
  );
};

export default Operators;
