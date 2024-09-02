import { useState } from 'react';
import Button from './components/Button/Button';
import List from './components/List';
import Menu from './components/Menu/Menu';
import Tasks from './components/Tasks/Tasks';

export default function App() {
  const [message, setMessage] = useState('Aprendendo sobre testes');

  const changeMessage = () => {
    setMessage('Aprendendo sobre React');
  };

  return (
    <>
      <Menu />
      <h1>Hello message</h1>
      <p>{message}</p>
      <Button disabled={false} onClick={changeMessage}>
        Change message
      </Button>
      <List initialItems={['Yuri', 'João', 'Pedro']} />;
      <Tasks />
    </>
  );
}
