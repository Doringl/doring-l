import React from 'react';
import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
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
      <Head>
        <title>DoringI | Full Stack Developer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {title ? (
        <Text as='h2' p='64px' fontSize='1.5em' fontWeight='semibold'>
          {title}
        </Text>
      ) : null}
      <main>{children}</main>
    </Flex>
  );
};

export default Layout;
