"use-client";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function DeleteMessage({ post }) {
  const router = useRouter();
  async function handleDelete() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <div>
      <button className="reaction-button" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
}
