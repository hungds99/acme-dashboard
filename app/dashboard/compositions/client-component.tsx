'use client';

import { useState } from 'react';

export default function ClientComponent({ children, component }: any) {
  console.log('Rendering client component...');
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <h1>Client Component</h1>
      {component}
      <div className="flex items-center">
        <button
          className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="text-xl">{count}</span>
        <button
          className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      {children}
    </div>
  );
}
