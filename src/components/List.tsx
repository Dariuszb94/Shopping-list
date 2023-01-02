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
        {items.map((items) => (
          <li>{items.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setItems((prev) => [...prev, { name: 'pierogi', status: 'done' }]);
        }}
      >
        +
      </button>
    </>
  );
};
