import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout/Layout';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <Layout title='About'>
      <Head>
        <title>About</title>
      </Head>
    </Layout>
  );
};

export default About;
