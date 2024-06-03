import 'server-only';

import { unstable_noStore as noStore } from 'next/cache';

export async function getUsers() {
  noStore();
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}
