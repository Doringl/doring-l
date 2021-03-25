import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import { Flex } from '@chakra-ui/layout';
import { useQuery } from '../../generated/graphql';
import { UnorderedList, ListItem } from '@chakra-ui/react';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  const { loading, error, data } = useQuery();
  console.log(data);

  return (
    <Layout title='Skills'>
      <Head>
        <title>Skills</title>
      </Head>
      {loading ? (
        <Spinner />
      ) : (
        <Flex
          flexDirection='column'
          justify='center'
          align='center'
          m='0 auto'
          maxW='%90'
        >
          <Flex justify='space-between'>
            <UnorderedList styleType='none' p='25px' textAlign='left'>
              {data.skills.map((skill) => (
                <ListItem
                  key={skill.id}
                  textDecoration='none'
                  lineHeight='24px'
                  fontSize='18px'
                  color='blackAlpha.400'
                  p='16px 0px'
                >
                  {skill.skillName}
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Flex>
      )}
    </Layout>
  );
};

export default Skills;
