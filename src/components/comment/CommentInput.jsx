import React from "react";
import { LayoutDiv } from "../../styles/style.common";
import useInput from "../../hooks/useInput";
import { addComment } from "../../api/comments";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import shortid from "shortid";
import {
  StyleCommentButton,
  StyleCommentForm,
  StyleCommentInput,
  StyleInputLabel,
} from "../../styles/style.comment";

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
      <StyleCommentForm>
        <StyleInputLabel>닉네임:</StyleInputLabel>
        <StyleCommentInput
          type="text"
          value={nickname}
          onChange={onHandlerNicknameInput}
        />
        <StyleInputLabel>내용:</StyleInputLabel>
        <StyleCommentInput
          type="text"
          value={comment}
          onChange={onHandlerCommentInput}
          width="35%"
        />
        <StyleCommentButton onClick={commentSubmitButtonClick}>
          댓글 추가
        </StyleCommentButton>
      </StyleCommentForm>
    </LayoutDiv>
  );
}

export default CommentInput;
