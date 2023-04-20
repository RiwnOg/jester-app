import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const obj = Object.fromEntries(searchParams.entries());
  // return NextResponse.json(obj);

  // const name = searchParams.get('name');
  // const instrument = searchParams.get('instrument');
  // return NextResponse.json({ name, instrument });

  const res = await prisma.example.findMany();
  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}

export async function DELETE(request: Request) {
  const res = await prisma.example.deleteMany();
  return NextResponse.json(res);
}
