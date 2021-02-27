import Head from 'next/head';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <Layout title='Blog'>
      <Head>
        <title>Blog</title>
      </Head>
    </Layout>
  );
};

export default Blog;
