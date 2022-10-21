import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  return (
    <main className='main-container'>
      <div className='title-container'>
        <h1>Login página</h1>
      </div>
      <div className='content-container'>
        <Input
          label='Nombre'
          inputText='Ingrese su nombre...'
          guardarValor={(e) => setNombre(e.target.value)}
        />
        <Input
          label='Contraseña'
          inputText='Ingrese su contraseña...'
          guardarValor={(e) => setContraseña(e.target.value)}
        />
        <Button password={contraseña}/>
      </div>
    </main>
  );
}

export default App;
