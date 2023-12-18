"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function AddComment({
  post,
  setIsComment,
  isComment,
  setCounter,
}) {
  const [text, setText] = useState("");
  const router = useRouter();

  async function handleComment(e) {
    e.preventDefault();
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });

    const data = await response.json();

    setIsComment(false);
    setCounter((prev) => prev + 1);
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
            <button type="submit">Comment</button>
            <button onClick={handleCancel} type="button">
              Cancel
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
