import React from "react";
import { api } from "@/utils/api";
import Link from "next/link";

export default function List() {
  const {data: posts, isLoading} = api.post.getPosts.useQuery();

  if (isLoading) {
    return <p className="text-2xl uppercase">Loading...</p>;
  }

  return (
    <ul className="grid w-full grid-cols-4 gap-5">
      {posts?.map((post) => (
        <li className="flex bg-black p-4 flex-col gap-3 rounded-md" key={post.id}>
          <h3 className="text-sm font-bold capitalize">{post.title}</h3>
          <p className="line-clamp-2 text-sm">{post.body}</p>
          <Link href={`/post/${post.id}`} className="text-[#ccc] hover:text-white transition-colors text-sm ml-auto mt-4">
            Read More
          </Link>
        </li>
      ))}
    </ul>
  );
}
