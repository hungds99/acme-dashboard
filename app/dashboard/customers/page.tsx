import ClientComponent from './client-component';
import ServerComponent from './server-component';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return (
    <main>
      <ClientComponent></ClientComponent>
    </main>
  );
}
