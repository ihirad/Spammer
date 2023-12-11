import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function EditMessage({ message, setIsEdit }) {
  const [text, setText] = useState(message.text);
  const router = useRouter();

  async function handleEdit(e) {
    e.preventDefault();
    if (!text) {
      alert("Please enter/edit a message");
    } else {
      const response = await fetch(`${API_URL}/api/posts/${message.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      });

      const info = await response.json();
      setIsEdit(false);
      router.refresh();
    }
  }

  async function handleCancel() {
    setIsEdit(false);
  }
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div>
          <button onClick={handleEdit} type="button">
            Submit
          </button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
