import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { LayoutDiv } from "../../styles/style.common";
import { deleteComment, getComments } from "../../api/comments";
import Background from "../../styles/style.loading";
import Spinner from "../../styles/spinner.gif";
import { StyleTodo } from "../../styles/style.todolist";
import { useParams } from "react-router-dom";
import {
  StyleCommentBox,
  StyleCommentDeleteButton,
} from "../../styles/style.comment";

function CommentList() {
  const { id } = useParams();

  //댓글 삭제 쿼리
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: () => {
      return <h1>에러입니다!!</h1>;
    },
  });

  //댓글 목록 조회, 쿼리 키 조심
  const { isLoading, isError, data } = useQuery("comments", getComments);
  // console.log("data!!💛💛", data);

  if (isLoading) {
    return (
      <Background>
        <img src={Spinner} alt="로딩중" width="5%" />
      </Background>
    );
  }
  if (isError) {
    return <Background>댓글을 가져오지 못했습니다😥</Background>;
  }

  //댓글 삭제
  const commentDeleteButtonClick = (commentId) => {
    if (window.confirm("댓글을 지울까요?")) {
      mutation.mutate(commentId);
    } else {
      return false;
    }
  };

  return (
    <LayoutDiv>
      {data
        .filter((item) => item.postId === id)
        .map((item) => {
          return (
            <StyleTodo height="100px" key={item.id}>
              <StyleCommentBox>
                <div>닉네임: {item.nickname}</div>
                <div>내용: {item.comment}</div>
              </StyleCommentBox>
              <div>
                <StyleCommentDeleteButton
                  onClick={() => {
                    commentDeleteButtonClick(item.id);
                  }}
                >
                  삭제
                </StyleCommentDeleteButton>
              </div>
            </StyleTodo>
          );
        })}
    </LayoutDiv>
  );
}

export default CommentList;
