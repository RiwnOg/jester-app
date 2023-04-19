function getBaseUrl() {
  return process.env.BASE_URL ?? process.env.VERCEL_URL;
}

export default async function Home() {
  const url = getBaseUrl();

  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  console.log(process.env.VERCEL_URL);
  console.log(process.env.BASE_URL);
  console.log(process.env.url);
  return <p>hello world: {url}</p>;
}
