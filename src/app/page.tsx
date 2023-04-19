function getBaseUrl() {
  return process.env.BASE_URL ?? process.env.VERCEL_URL;
}

export default async function Home() {
  const url = getBaseUrl();

  return (
    <div>
      <p>hello world - new branch </p>
      <p>NEXT_PUBLIC_SITE_URL: ~{process.env.NEXT_PUBLIC_SITE_URL}~ </p>
      <p>NEXT_PUBLIC_VERCEL_URL: ~{process.env.NEXT_PUBLIC_VERCEL_URL}~ </p>
      <p>VERCEL_URL: ~{process.env.VERCEL_URL}~</p>
      <p>BASE_URL: ~{process.env.BASE_URL}~</p>
      <p>url: ~{process.env.url}~</p>
    </div>
  );
}
