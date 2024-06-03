import { lusitana } from '@/app/ui/fonts';
import ClientComponent from './client-component';
import ServerComponent from './server-component';

function PropsServerComponent() {
  return <ServerComponent />;
}

export default async function Page() {
  const time = new Date().getTime();
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Compositions
      </h1>
      <div>
        {time % 2 === 0 ? <p>Time change 1</p> : <p>Time change 2</p>}
        <ClientComponent component={<PropsServerComponent />}>
          <ServerComponent />
        </ClientComponent>
      </div>
    </div>
  );
}
