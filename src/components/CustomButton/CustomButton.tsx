import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface CustomButtonProps {
  id: string;
  variant: 'solid' | 'outline';
}

const CustomButton: React.FC<CustomButtonProps> = ({ id, variant }) => {
  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <Link href={`/${id}`}>
      <Box
        as='button'
        height='28px'
        lineHeight='1.2'
        transition='all 0.4s cubic-bezier(.08,.52,.52,1)'
        border='2px'
        m='8px'
        minW='135px'
        px='12px'
        borderRadius='4px'
        fontSize='14px'
        fontWeight='medium'
        bg={`${variant === 'outline' ? '#ffffff' : '#007BCD'}`}
        borderColor='#007BCD'
        color={`${variant === 'outline' ? '#007BCD' : '#ffffff'}`}
        _hover={{
          bg: `${variant === 'outline' ? '#007BCD' : '#ffffff'}`,
          color: `${variant === 'outline' ? '#ffffff' : '#007BCD'}`,
        }}
        _active={{
          bg: '#ffffff',
          transform: 'scale(0.98)',
          borderColor: '#007BCD',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        className='animationOne'
      >
        {capitalize(id)}
      </Box>
    </Link>
  );
};

export default CustomButton;
