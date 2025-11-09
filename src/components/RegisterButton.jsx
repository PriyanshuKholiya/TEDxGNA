import React from 'react';

const RegisterButton = () => {
  return (
    <button
      onClick={() => window.open('https://forms.gle/BwBRU2YL4W51ocfQ7', '_blank')}
    >
      Nominate Now
    </button>
  );
};

export default RegisterButton;