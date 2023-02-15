import { useEffect, useState } from 'react';

export interface IItems {
  name: string;
  status: string;
}

export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  useEffect(() => {
    setNewItem('');
  }, [items]);

  return (
    <div>
      <ul>
        {items.map(({ name, status }) => (
          <li>
            {name}
            {status}
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
            setItems((prev) => [...prev, { name: newItem, status: 'to-do' }]);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
