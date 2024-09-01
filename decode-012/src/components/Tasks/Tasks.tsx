import axios from 'axios';
import { useState } from 'react';
import Button from '../Button/Button';

interface Tasks {
  id: number;
  title: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const handleClick = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
    );

    setTasks(data);
  };
  return (
    <>
      <h1>Tasks from API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get tasks from API
      </Button>
      <ul>
        {tasks && tasks.map((task) => <li key={task.id}>{task.title}</li>)}
      </ul>
    </>
  );
};

export default Tasks;
