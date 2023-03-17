import { useState } from 'react';
import { v4 as uuid } from 'uuid';
interface IItems {
  name: string;
  status: string;
  id: string;
}

export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  return (
    <div>
      <ul>
        {items.map(({ name, status, id }) => (
          <li>
            {name}
            {status}
            <button
              onClick={() => {
                setItems((prev) => {
                  return [...prev.filter((item) => item.id !== id)];
                });
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <div className='add-new'>
        <input
          onChange={(e) => setNewItem(e.target.value)}
          placeholder='Add new'
          value={newItem}
        ></input>
        <button
          onClick={() => {
            setNewItem('');
            setItems((prev) => [
              ...prev,
              { name: newItem, status: 'to-do', id: uuid() },
            ]);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
