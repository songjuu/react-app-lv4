import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailTodo, updateTodo } from "../../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";
import { LayoutDiv, StyleInputButton } from "../../styles/style.common";
import {
  StyleContentDiv,
  StyleDiv,
  StylePrevButton,
  StyleUpdateInput,
} from "../../styles/style.detailTodo";
import Spinner from "../../styles/spinner.gif";
import Background from "../../styles/style.loading";

function DetailTodo() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isUpdate, setIsUpdate] = useState(false);
  const [updateTitle, onUpdateTitleInput] = useInput();
  const [updateContent, onUpdateContentInput] = useInput();

  // console.log("updateTitle!!!", updateTitle);

  //수정을 위한 리액트 쿼리
  const queryClient = useQueryClient();
  const mutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
    onError: () => {
      return <h1>에러입니다!!</h1>;
    },
  });

  //할 일 조회, 쿼리 키 확인
  const { isLoading, isError, data } = useQuery("todo", () =>
    getDetailTodo(id)
  );

  if (isLoading) {
    return (
      <Background>
        <img src={Spinner} alt="로딩중" width="5%" />
      </Background>
    );
  }
  if (isError) {
    return <Background>할 일을 가져오지 못했습니다😥</Background>;
  }

  //할 일 수정
  const handleUpdateButtonClick = () => {
    setIsUpdate(!isUpdate);
    // console.log("isUpdate=>>", isUpdate);
    onUpdateTitleInput({ target: { value: data.title } });
    onUpdateContentInput({ target: { value: data.content } });

    const newUpdateTodo = {
      ...data,
      title: updateTitle,
      content: updateContent,
    };

    mutation.mutate(newUpdateTodo);
  };

  return (
    <LayoutDiv>
      {/* 수정하지 않을 경우(default) */}
      {isUpdate || (
        <>
          <StyleDiv>
            <h1>{data.title}</h1>
            <StylePrevButton onClick={() => navigate("/list")}>
              이전으로
            </StylePrevButton>
          </StyleDiv>
          <div>작성자: {data.name}</div>
          <StyleContentDiv>{data.content}</StyleContentDiv>
        </>
      )}
      {/* 수정 하는 경우  */}
      {isUpdate && (
        <>
          <StyleDiv>
            <StyleUpdateInput
              width="40%"
              value={updateTitle}
              onChange={onUpdateTitleInput}
            ></StyleUpdateInput>
          </StyleDiv>
          <div>작성자: {data.name}</div>
          <StyleUpdateInput
            height="350px"
            value={updateContent}
            onChange={onUpdateContentInput}
          ></StyleUpdateInput>
        </>
      )}

      <div>
        <StyleInputButton onClick={handleUpdateButtonClick}>
          {isUpdate ? "완료 하기" : "수정 하기"}
        </StyleInputButton>
      </div>
    </LayoutDiv>
  );
}

export default DetailTodo;
