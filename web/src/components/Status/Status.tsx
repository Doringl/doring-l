import React from 'react';

interface StatusProps {
  text: string;
}

const Status: React.FC<StatusProps> = ({ text }) => {
  return (
    <div
      style={{
        fontSize: '18px',
        color: `${text === 'Deployed' ? '#e535ab' : '#007bcd'}`,
        marginLeft: '4em',
        alignItems: 'flex-end',
      }}
    >
      {`.  .  .   ${text}!`}
    </div>
  );
};

export default Status;
