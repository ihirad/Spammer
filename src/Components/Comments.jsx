import { API_URL } from "@/lib/API_URL";
import { useEffect, useState } from "react";

export default function Comments({ post, counter }) {
  const [comments, setComments] = useState([]);

  async function getComments() {
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      cache: "no-store",
    });
    const info = await response.json();
    setComments(info.comments);
  }

  useEffect(() => {
    getComments();
  }, [counter]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} id="comment-container">
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
