"use client";
import { API_URL } from "@/lib/API_URL";
import Message from "./Msg";

export default async function Messages() {
  const response = await fetch(`${API_URL}/api/posts`, {
    cache: "no-store",
  });

  const info = await response.json();
  const messages = info.posts;

  return (
    <div>
      <Message messages={messages} />
    </div>
  );
}
