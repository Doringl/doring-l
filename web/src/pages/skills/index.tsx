import Head from 'next/head';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <Layout title='Skills'>
      <Head>
        <title>Skills</title>
      </Head>
    </Layout>
  );
};

export default Skills;
