import { useState } from 'react';
export interface IItems {
  name: string;
  status: string;
}
export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);
  const [showInput, SetShowInput] = useState(false);

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
          SetShowInput(true);
          // setItems((prev) => [...prev, { name: '', status: 'to-do' }]);
        }}
      >
        +
      </button>
    </>
  );
};
