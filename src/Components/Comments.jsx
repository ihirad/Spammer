"use client";
import { API_URL } from "@/lib/API_URL";
import { useEffect, useState } from "react";

export default function Comments({ message }) {
  const [comments, setComments] = useState([]);

  async function getComments() {
    const response = await fetch(
      `${API_URL}/api/posts/${message.id}/comments`,
      { cache: "no-store" }
    );
    const info = await response.json();
    setComments(info.comments);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
