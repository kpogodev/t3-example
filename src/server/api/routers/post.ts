import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()) as Post[];

    if (!Array.isArray(posts)) {
      throw new Error("Invalid response");
    }

    return posts;
  }),
  getPostById: publicProcedure.input(z.object({
    id: z.number(),
  })).query(async ({ input }) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${input.id}`).then((res) => res.json()) as Post;

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }),
});
