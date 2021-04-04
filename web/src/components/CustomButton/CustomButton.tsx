import { Button, useStyleConfig } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface CustomButtonProps {
  path?: string;
  variant: 'solid' | 'outline' | 'outlineBack';
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  path = '',
  variant,
  text,
}) => {
  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const styles = useStyleConfig('Button', { variant });
  return (
    <Link href={`/${path}`}>
      <Button
        transition='all 0.4s cubic-bezier(.08,.52,.52,1)'
        className='animationOne'
        sx={styles}
      >
        {capitalize(text)}
      </Button>
    </Link>
  );
};

export default CustomButton;
