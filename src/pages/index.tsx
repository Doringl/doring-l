import { Flex, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../components/CustomButton/CustomButton';
import { Layout } from '../components/Layout/Layout';

const navArray = ['works', 'skills', 'blog', 'collections'];

const Index = () => {
  return (
    <Layout>
      <Flex direction='column' m='16px' justify='center' align='center'>
        {/* <Image /> */}
        <Spacer mt='16px' />
        <Link href='/'>
          <Text
            className='animationOne'
            fontSize='x-large'
            align='center'
            fontWeight='semibold'
            _hover={{
              cursor: 'pointer',
            }}
          >
            DoringI
          </Text>
        </Link>
        <Spacer mt='8px' />
        <Text
          align='center'
          fontWeight='light'
          color='gray'
          fontSize='sm'
          className='animationTwo'
        >
          React.js and GraphQL Enthusiast | Gamer | Developer{' '}
        </Text>
      </Flex>
      <Flex wrap='wrap' justify='center' align='center'>
        <CustomButton id='about' variant='solid' />
      </Flex>
      <Flex wrap='wrap' justify='center' align='center'>
        {navArray.map((i) => (
          <CustomButton id={i} key={i} variant='outline' />
        ))}
      </Flex>
    </Layout>
  );
};

export default Index;
