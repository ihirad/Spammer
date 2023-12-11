// "use client";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function LikeMessage({ message }) {
  const router = useRouter();
  async function handleLike() {
    const response = await fetch(`${API_URL}/api/posts/${message.id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div>
      <div id="likes">
        {message.likes}
        <button className="reaction-button" onClick={handleLike}>
          👍
        </button>
      </div>
    </div>
  );
}
