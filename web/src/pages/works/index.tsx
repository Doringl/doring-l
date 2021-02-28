import Head from 'next/head';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';

interface WorksProps {}

const Works: React.FC<WorksProps> = ({}) => {
  return (
    <Layout title='Works'>
      <Head>
        <title>Works</title>
      </Head>
    </Layout>
  );
};

export default Works;
