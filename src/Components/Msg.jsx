"use client";
import { useState } from "react";
import EditMessage from "./EditMsg";
import LikeMessage from "./LikeMsg";
import DeleteMessage from "./DeleteMsg";
import AddComment from "./AddComment";

export default function Message({ post }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div id="message-style"> {post.text}</div>
      <div key={post.id} className="btn-container">
        {isEdit ? (
          <EditMessage post={post} key={post.id} setIsEdit={setIsEdit} />
        ) : null}
        <LikeMessage post={post} />
        <button
          className="reaction-button"
          onClick={(e) => {
            setIsComment(true);
          }}
        >
          💬
        </button>
        <DeleteMessage post={post} />
        <button
          className="reaction-button"
          onClick={(e) => {
            e.stopPropagation();
            setIsEdit(true);
          }}
        >
          ✎
        </button>
        {isComment ? (
          <AddComment
            setIsComment={setIsComment}
            isComment={isComment}
            post={post}
            setCounter={setCounter}
          />
        ) : null}
      </div>
    </div>
  );
}
