"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function PostMessage() {
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newPost,
      }),
    });

    const info = await response.json();

    if (!info.success) {
      setError(info.error);
    } else {
      setNewPost("");
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
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
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
