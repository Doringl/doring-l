import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import React from 'react';

import theme from '../theme';
import '../assets/animations.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
