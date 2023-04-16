import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
interface IItems {
  name: string;
  status: string;
  id: string;
}

export const List = () => {
  const [newItem, setNewItem] = useState<string>('Add new');
  const [items, setItems] = useState<IItems[]>(() => {
    const savedItem = localStorage.getItem('shoppingListItems');

    if (savedItem === null) return [];
    const parsedItem = JSON.parse(savedItem);

    return parsedItem;
  });

  useEffect(() => {
    if (!items.length) return;

    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }, [items]);

  return (
    <section>
      <ul>
        {items.map(({ name, status, id }) => (
          <li key={id}>
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
    </section>
  );
};
