import { prisma } from "@/lib/prisma.js";
import Comments from "./Comments";

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
      {posts.map((post) => {
        return <Comments key={post.id} post={post} />;
      })}
    </div>
  );
}
