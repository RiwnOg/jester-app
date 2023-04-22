import { authOptions } from '@/lib/auth';
import { formatDate, baseURL, fetchWrapper } from '@/lib/utils';
import { Example } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import DeleteExample from './DeleteExample';

export default async function Home() {
  const sessionData = await getServerSession(authOptions);
  /*
  const res = await fetch(`${baseURL}/api/example`, {
    method: 'GET',
  });
*/

  const examples = await fetchWrapper<Example[]>('/example', {
    method: 'GET',
  });

  return (
    <div>
      <main className=''>
        <div className=''>
          <h1 className='underline text-2xl'>Welcome! 👋</h1>
        </div>
        {sessionData ? (
          <div>
            <p>Congrats! {sessionData?.user?.name} 🎉</p>
            <p>You have Found my secrets</p>
            <DeleteExample baseUrl={baseURL} />
            {examples &&
              examples.map((example: Example) => (
                <li key={example.id}>
                  <p>Post: {example.post}</p>
                  <p>Created at: {formatDate(example.createdAt.toString())}</p>
                </li>
              ))}
          </div>
        ) : (
          <p>You cant see my secrets </p>
        )}
      </main>
    </div>
  );
}
