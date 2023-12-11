// "use client";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function DeleteMessage({ message }) {
  const router = useRouter();
  async function handleDelete() {
    const response = await fetch(`${API_URL}/api/posts/${message.id}`, {
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
