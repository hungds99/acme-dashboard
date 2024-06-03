import { getUsers } from '@/app/lib/external';

export default async function ServerComponent() {
  console.log('Rendering server component...');
  const users = await getUsers();

  return (
    <div>
      <h1>Server Component</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
