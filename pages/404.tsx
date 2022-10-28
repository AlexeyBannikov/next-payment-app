import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { Title } from '../components';
import { Container } from '../styles';

const Error: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Container>
      <Head>
        <title>Error</title>
      </Head>
      <Title textAlign='center'>404 | Something is going wrong</Title>
    </Container>
  );
};

export default Error;
