import React, { useState } from 'react';
export interface IItems {
  name: string;
  status: string;
}
export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);

  return (
    <>
      <ul>
        {items.map(({ name, status }) => (
          <li>
            {name}
            {status}
          </li>
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
