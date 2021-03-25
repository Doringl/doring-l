import React from 'react';

interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = ({}) => {
  return (
    <div className='loader'>
      <div className='inner one' />
      <div className='inner two' />
      <div className='inner three' />
      <div className='inner four' />
    </div>
  );
};

export default Spinner;
