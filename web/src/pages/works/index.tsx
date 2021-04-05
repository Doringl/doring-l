import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import Status from '../../components/Status/Status';
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
            <UnorderedList styleType='none' p='25px' textAlign='left' ml='0'>
              {data.projects.map((project) => (
                <ListItem
                  key={project.id}
                  textDecoration='none'
                  lineHeight='24px'
                  fontSize='18px'
                  color='blackAlpha.400'
                  p='16px 0px'
                >
                  <Flex flexDirection='row'>
                    <Text w='12em' style={{ cursor: 'pointer' }}>
                      <a
                        href={project.projectGitHubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {project.projectName}
                      </a>
                    </Text>
                    <Status text={project.projectStatus} />
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
          <CustomButton variant='outlineBack' text='Back' />
        </Flex>
      )}
    </Layout>
  );
};

export default Works;
