import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
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
            {id}
            {/* <button
              onClick={() => {
                setItems((prev) => [
                  ...prev,
                  { name: newItem, status: 'to-do' },
                ]);
              }}
            >
              -
            </button> */}
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
