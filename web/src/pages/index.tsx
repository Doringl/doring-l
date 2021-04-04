import {
  Center,
  Flex,
  Spacer,
  Text,
  useStyleConfig,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import CustomButton from '../components/CustomButton/CustomButton';
import Layout from '../components/Layout/Layout';

const navArray = ['works', 'skills', 'blog', 'collections'];

const Index = () => {
  const styles = useStyleConfig('Link', { variant: 'regular' });
  return (
    <Layout>
      <Flex direction='column' m='16px' justify='center' align='center'>
        {/* <Image /> */}
        <img
          src='/me.png'
          alt='Sefa'
          height={128}
          width={128}
          className='animationOne'
        />
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
      <Flex
        wrap='wrap'
        justify='center'
        align='center'
        className='animationTwo'
      >
        <CustomButton path='about' variant='solid' text='about' />
      </Flex>
      <Flex
        wrap='wrap'
        justify='center'
        align='center'
        className='animationTwo'
      >
        {navArray.map((i) => (
          <CustomButton path={i} key={i} variant='outline' text={i} />
        ))}
      </Flex>
      <Spacer mt='8px' />
      <Center className='animationTwo'>
        <Link href='/contact'>
          <Box as='a' sx={styles}>
            Contact
          </Box>
        </Link>
      </Center>
      <Spacer mt='16px' />
      <Flex justify='center' className='animationTwo'>
        <Link href='https://github.com/Doringl' passHref={true}>
          <Box as='a' sx={styles} target='_blank' rel='noopenner noreferrer'>
            <img
              src='/GitHub-Logo.png'
              alt='GitHub Profile'
              height={48}
              width={48}
            />
            GitHub
          </Box>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Index;
