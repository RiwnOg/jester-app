import getExample from "@/actions/getExample";
import { formatDate } from "@/lib/utils";
import Navbar from "@/navbar/Navbar";

export default async function Home() {
  const examples = await getExample();

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="">
          <h1 className="underline text-2xl">Hello World</h1>
        </div>
        <p>This is my examples</p>
        {examples &&
          examples.map((example) => (
            <li key={example.id}>
              <p>Post: {example.post}</p>
              <p>Created at: {formatDate(example.createdAt.toString())}</p>
            </li>
          ))}
      </main>
    </div>
  );
}
