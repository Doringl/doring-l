import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { body: `Montserrat` };

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'medium',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: '10px',
      padding: '8px',
      height: '24px',
    },
    md: {
      fontSize: '14px',
      px: '12px',
      height: '28px',
      minW: '135px',
      m: '8px',
    },
    lg: {
      fontSize: '18px',
      height: '32px',
      w: '100%',
      m: '0px',
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#007BCD',
      color: '#007BCD',
      _hover: {
        bg: '#007BCD',
        color: '#ffffff',
      },
      _focus: {
        boxShadow: '0 0 0px 0px rgba(0, 0, 0, .0)',
      },
    },
    solid: {
      border: '2px solid',
      borderColor: '#007BCD',
      bg: '#007BCD',
      color: 'white',
      _hover: {
        bg: '#ffffff',
        color: '#007BCD',
      },
      _focus: {
        boxShadow: '0 0 0px 0px rgba(0, 0, 0, .0)',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
    lineHeight: '1.2',
    px: '12px',
    borderRadius: '4px',
  },
};

const Link = {
  baseStyle: {
    textDecoration: 'none',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: '10px',
    },
    md: {
      fontSize: '14px',
    },
  },
  // Two variants: outline and solid
  variants: {
    regular: {
      color: '#999',
      _hover: { color: '#007BCD', cursor: 'pointer', textDecoration: 'none' },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variants: 'regular',
    textDecoration: 'none',
  },
};

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  components: {
    Button,
    Link,
  },
  icons: {
    logo: {
      path: (
        <svg
          width='3000'
          height='3163'
          viewBox='0 0 3000 3163'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='3000' height='3162.95' fill='none' />
          <path
            d='M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z'
            fill='currentColor'
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
});

export default theme;
