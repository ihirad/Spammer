"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function PostMessage() {
  const [post, setPost] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: post,
      }),
    });

    const info = await response.json();

    if (!info.success) {
      setError(info.error);
    } else {
      setPost("");
      setError("");
      router.refresh();
    }
  }

  return (
    <div>
      <form id="post-container" onSubmit={handleSubmit}>
        <textarea
          id="post-text"
          placeholder="I want the world to know.."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        {error}
        <button id="post-button" type="submit">
          SUBMIT POST
        </button>
      </form>
      <br />
    </div>
  );
}
