import prisma from "@/lib/prisma";

export default async function getExample() {
  try {
    const example = await prisma.example.findMany();
    return example;
  } catch (error) {
    console.log(error);
  }
}
