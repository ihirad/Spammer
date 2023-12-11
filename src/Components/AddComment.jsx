"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function AddComment({ message, setIsComment, isComment }) {
  const [text, setText] = useState("");
  const router = useRouter();

  async function handleComment(e) {
    e.preventDefault();
    const response = await fetch(
      `${API_URL}/api/posts/${message.id}/comments`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      }
    );

    const data = await response.json();

    setIsComment(false);
    router.refresh();
  }

  function handleCancel() {
    setIsComment(false);
  }

  return (
    <div>
      {isComment ? (
        <form onSubmit={handleComment}>
          <input
            className="reply-box"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <button onClick={handleComment} type="button">
              Comment
            </button>
            <button onClick={handleCancel} type="button">
              Cancel
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
