import { Box, useStyleConfig } from '@chakra-ui/react';
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
  const styles = useStyleConfig('Button', { variant });
  return (
    <Link href={`/${id}`}>
      <Box
        as='button'
        transition='all 0.4s cubic-bezier(.08,.52,.52,1)'
        className='animationOne'
        sx={styles}
      >
        {capitalize(id)}
      </Box>
    </Link>
  );
};

export default CustomButton;
