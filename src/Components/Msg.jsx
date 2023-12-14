"use client";
import { useState } from "react";
import EditMessage from "./EditMsg";
import LikeMessage from "./LikeMsg";
import DeleteMessage from "./DeleteMsg";
import AddComment from "./AddComment";
import Comments from "./Comments";

export default function Message({ posts }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {isEdit ? (
              <EditMessage post={post} key={post.id} setIsEdit={setIsEdit} />
            ) : (
              <div>{post.text}</div>
            )}
            <div className="btn-container">
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
            </div>{" "}
            {isComment ? (
              <AddComment
                setIsComment={setIsComment}
                isComment={isComment}
                post={post}
                setCounter={setCounter}
              />
            ) : null}
            <Comments post={post} counter={counter} />
          </div>
        );
      })}
    </div>
  );
}
