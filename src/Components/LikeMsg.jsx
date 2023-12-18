"use client";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function LikeMessage({ post }) {
  const router = useRouter();
  async function handleLike() {
    const response = await fetch(`/api/posts/${post.id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div>
      <div id="likes">
        <button className="reaction-button" onClick={handleLike}>
          {post.likes} 👍
        </button>
      </div>
    </div>
  );
}
