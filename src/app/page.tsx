import { authOptions } from '@/lib/auth';
import { formatDate } from '@/lib/utils';
import Navbar from '@/navbar/Navbar';
import { Example } from '@prisma/client';
import { getServerSession } from 'next-auth/next';

export function getBaseUrl() {
  return process.env.BASE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;
}

export default async function Home() {
  const sessionData = await getServerSession(authOptions);
  const url = getBaseUrl();

  const res = await fetch(`${url}/api/example`, {
    method: 'GET',
  });
  const examples = await res.json();

  return (
    <div>
      <Navbar />
      <main className=''>
        <div className=''>
          <h1 className='underline text-2xl'>Welcome! 👋</h1>
        </div>
        {sessionData ? (
          <div>
            <p>Congrats! {sessionData?.user?.name} 🎉</p>
            <p>You have Found my secrets</p>
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
