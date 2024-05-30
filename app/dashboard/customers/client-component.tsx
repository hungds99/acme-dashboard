'use client';

import { useState } from 'react';
import ServerComponent from './server-component';

export default function ClientComponent({ children }: any) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click to count</button>
      <ServerComponent />
    </div>
  );
}
