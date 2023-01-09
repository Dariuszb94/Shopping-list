import React, { useState } from 'react';
export interface IItems {
  name: string;
  status: string;
}
export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);
  console.log(items);
  return (
    <>
      <ul>
        {items.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setItems((prev) => [...prev, { name: '', status: 'to-do' }]);
        }}
      >
        +
      </button>
    </>
  );
};
