import Head from "next/head";

import List from "@/components/List";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-white text-[#333] flex-col gap-10 p-10">
        This is desktop version
        <List />
      </main>
    </>
  );
}
