import Navbar from "@/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1 className="underline text-2xl">Hello World</h1>
        </div>
      </main>
    </div>
  );
}
