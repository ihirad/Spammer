"use client";
import { useRouter } from "next/navigation.js";

export default function DeleteMessage({ post }) {
  const router = useRouter();

  async function handleDelete() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    router.refresh();
    console.log("deleting");
  }

  return (
    <div>
      <button className="reaction-button" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
}
