"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditMessage({ post, setIsEdit }) {
  const [text, setText] = useState(post.text);
  const router = useRouter();

  async function handleEdit(e) {
    e.preventDefault();
    if (!text) {
      alert("Please enter/edit a message");
    } else {
      const response = await fetch(`/api/posts/${post.id}`, {
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
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <div>
            <button onClick={handleEdit} type="submit">
              Submit
            </button>
            <button onClick={handleCancel} type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
