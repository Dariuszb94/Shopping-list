import { useEffect, useState } from 'react';
interface IItems {
  name: string;
  status: string;
}

export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  return (
    <div>
      <ul>
        {items.map(({ name, status }) => (
          <li>
            {name}
            {status}
            <button
              onClick={() => {
                setItems((prev) => [
                  ...prev,
                  { name: newItem, status: 'to-do' },
                ]);
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
            setItems((prev) => [...prev, { name: newItem, status: 'to-do' }]);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
