import { useState } from 'react';

interface ListProps {
  initialItems: string[];
}

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  const addToList = () => {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const removeFromList = (_item: string) => {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== item));
    }, 500);
  };
  return (
    <>
      <input
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
