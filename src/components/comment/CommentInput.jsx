import React from "react";
import { LayoutDiv } from "../../styles/style.common";
import useInput from "../../hooks/useInput";
import { addComment } from "../../api/comments";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import shortid from "shortid";

function CommentInput() {
  const { id } = useParams();
  // console.log("id!!!", id);

  //리액트 쿼리
  const queryClient = useQueryClient();
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: () => {
      return <h1>에러입니다!!</h1>;
    },
  });

  const [nickname, onHandlerNicknameInput] = useInput();
  const [comment, onHandlerCommentInput] = useInput();

  //댓글 추가
  const commentSubmitButtonClick = (e) => {
    e.preventDefault();
    if (!comment || !nickname) {
      return alert("모든 내용을 입력해주세요!");
    }

    const newComment = {
      id: shortid.generate(),
      postId: id,
      nickname,
      comment,
    };

    mutation.mutate(newComment);

    onHandlerNicknameInput({ target: { value: "" } });
    onHandlerCommentInput({ target: { value: "" } });
  };

  return (
    <LayoutDiv>
      <form>
        <label>
          닉네임:
          <input
            type="text"
            value={nickname}
            onChange={onHandlerNicknameInput}
          />
        </label>
        <label>
          내용:
          <input type="text" value={comment} onChange={onHandlerCommentInput} />
        </label>
        <button onClick={commentSubmitButtonClick}>댓글 추가</button>
      </form>
    </LayoutDiv>
  );
}

export default CommentInput;
