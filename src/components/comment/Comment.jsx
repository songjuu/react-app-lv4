import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

function Comment() {
  return (
    <>
      {/* TODO: 댓글을 누를때 댓글이 보이도록 하기 */}
      <CommentInput />
      <CommentList />
    </>
  );
}

export default Comment;
