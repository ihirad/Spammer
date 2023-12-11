"use client";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";
import { useState } from "react";
import EditMessage from "./EditMsg";
import LikeMessage from "./LikeMsg";
import DeleteMessage from "./DeleteMsg";
import AddComment from "./AddComment";
import Comments from "./Comments";

export default function Message({ messages }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isComment, setIsComment] = useState(false);

  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            {isEdit ? (
              <EditMessage
                message={message}
                key={message.id}
                setIsEdit={setIsEdit}
              />
            ) : (
              <div>{message.text}</div>
            )}
            <div className="btn-container">
              <LikeMessage message={message} />
              <button
                className="reaction-button"
                onClick={(e) => {
                  setIsComment(true);
                }}
              >
                💬
              </button>
              <DeleteMessage message={message} />
              <button
                className="reaction-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEdit(true);
                }}
              >
                ✎
              </button>
            </div>{" "}
            {isComment ? (
              <AddComment
                setIsComment={setIsComment}
                isComment={isComment}
                message={message}
              />
            ) : null}
            <Comments message={message} />
          </div>
        );
      })}
    </div>
  );
}
