import { API_URL } from "@/lib/API_URL";
import Message from "./Msg";
import { prisma } from "@/lib/prisma.js";

export default async function Messages() {
  // const response = await fetch(`${API_URL}/api/posts`, {
  //   cache: "no-store",
  // });
  // const info = await response.json();
  // const messages = info.posts;

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Message posts={posts} />
    </div>
  );
}
