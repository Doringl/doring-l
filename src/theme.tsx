import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { body: `Montserrat` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

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

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  components: {
    Button,
  },
  breakpoints,
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
