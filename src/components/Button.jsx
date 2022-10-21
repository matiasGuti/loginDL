import React from 'react';
import '../styles/Button.css';

const Button = ({ password }) => {
  return (
    <div className='button-container'>
      <button
        hidden={password === '252525' ? '' : 'hidden'}
        className='button-send'
      >
        Enviar
      </button>
    </div>
  );
};

export default Button;
