import { Flex, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  return (
    <Flex
      direction='column'
      justify='center'
      w='100%'
      minH='100vh'
      position='relative'
      overflowY='auto'
      maxW='90%'
      align='center'
      m='-0 auto'
    >
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
    </Flex>
  );
};

export default Index;
