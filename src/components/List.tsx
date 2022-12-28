import React, { useState } from 'react';
export interface IItems {
  name: string;
  status: string;
}
export const List = () => {
  const [items, setItems] = useState<IItems[]>([]);

  return (
    <>
      <ul></ul>
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
