import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "@/utils/api";

export default function PostPage() {
  const { id } = useParams();
  const { data: post, isLoading } = api.post.getPostById.useQuery({
    id: Number(id),
  });

  return (
    <>
      <Head>
        <title>Post - {post?.title}</title>
      </Head>
      <div className="flex min-h-screen flex-col gap-6 bg-white p-20 text-[#333]">
        {isLoading && <p className="text-2xl uppercase">Loading...</p>}
        <h2 className="text-xl font-bold capitalize">{post?.title}</h2>
        <p>{post?.body}</p>
        <Link href="/" className="text-blue-500 hover:text-blue-600 transition-colors">
          Go back
        </Link>
      </div>
    </>
  );
}
