import React from 'react';
import '../styles/Input.css';

const Input = ({ label, inputText, guardarValor }) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        type={label === 'Nombre' ? 'text' : 'password'}
        placeholder={inputText}
        onChange={guardarValor}
        className='input-box'
      />
    </div>
  );
};

export default Input;
