export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
}

export const baseURL =
  process.env.BASE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;
