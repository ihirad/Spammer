import { prisma } from "@/lib/prisma";
import Message from "./Msg";

export default async function Comments({ post }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: post.id,
    },
  });

  return (
    <div>
      <Message post={post} />
      {comments.length > 0 && (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id} id="comment-container">
                <p>{comment.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
