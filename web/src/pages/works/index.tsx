import { Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import { useGetProjectsQuery } from '../../generated/graphql';

interface WorksProps {}

const Works: React.FC<WorksProps> = ({}) => {
  const { loading, error, data } = useGetProjectsQuery();
  return (
    <Layout title='Works'>
      <Head>
        <title>Works</title>
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
              {data.projects.map((project) => (
                <ListItem
                  key={project.id}
                  textDecoration='none'
                  lineHeight='24px'
                  fontSize='18px'
                  color='blackAlpha.400'
                  p='16px 0px'
                >
                  {project.projectName}
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Flex>
      )}
    </Layout>
  );
};

export default Works;
