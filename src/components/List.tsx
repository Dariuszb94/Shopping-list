import { useEffect, useState } from 'react';
interface IItems {
  name: string;
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
        {items.map(({ name, id }) => (
          <li key={id}>
            {name}
            <button
              className='delete'
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
          className='add'
          onClick={() => {
            setNewItem('');
            setItems((prev) => [
              ...prev,
              {
                name: newItem,
                id: String(Math.floor(Math.random() * 9999)),
              },
            ]);
          }}
        >
          +
        </button>
      </div>
    </section>
  );
};
