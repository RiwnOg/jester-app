import axios from 'axios';

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

export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`${baseURL}/api${input}`, init);
  const result = await data.json();
  return result as T;
}

export const axiosClient = axios.create({
  baseURL: baseURL,
});
