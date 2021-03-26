import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout/Layout';

interface CollectionsProps {}

const Collections: React.FC<CollectionsProps> = ({}) => {
  return (
    <Layout title='Collections'>
      <Head>
        <title>Collections</title>
      </Head>
    </Layout>
  );
};

export default Collections;
