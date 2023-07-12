import React, { useState } from "react";
import { LayoutDiv, StyleInputButton } from "../../styles/style.common";
import {
  StyleFormTitle,
  StyleInput,
  StyleTextArea,
} from "../../styles/style.addlist";
import useInput from "../../hooks/useInput";
import { addTodo } from "../../api/todos";
import { useMutation, useQueryClient } from "react-query";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";

function AddList() {
  const navigate = useNavigate();

  //리액트 쿼리
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      return <h1>에러입니다!!</h1>;
    },
  });

  //useInput hook 사용
  const [name, onHandlerNameInput] = useInput();
  const [title, onHandlerTitleInput] = useInput();
  const [content, onHandlerContentInput] = useInput();
  // console.log(name, title, content);

  //할 일 추가
  const handleSubmitButtonClick = () => {
    if (!title || !content || !name) {
      return alert("모든 내용을 입력해주세요!");
    }

    const newTodo = {
      id: shortid.generate(),
      name,
      title,
      content,
    };

    mutation.mutate(newTodo);

    navigate("/list");
  };

  return (
    <LayoutDiv>
      <StyleFormTitle>작성자</StyleFormTitle>
      <StyleInput
        placeholder="작성자의 이름을 입력해주세요."
        value={name}
        type="text"
        onChange={onHandlerNameInput}
      ></StyleInput>
      <StyleFormTitle>제목</StyleFormTitle>
      <StyleInput
        placeholder="제목을 입력해주세요."
        value={title}
        type="text"
        onChange={onHandlerTitleInput}
      ></StyleInput>
      <StyleFormTitle>내용</StyleFormTitle>
      <StyleTextArea
        placeholder="내용을 입력해주세요."
        value={content}
        type="text"
        onChange={onHandlerContentInput}
      ></StyleTextArea>
      <div>
        <StyleInputButton onClick={handleSubmitButtonClick}>
          추가 하기
        </StyleInputButton>
        <StyleInputButton margin="20px" onClick={() => navigate("/list")}>
          할 일 목록 보러가기
        </StyleInputButton>
      </div>
    </LayoutDiv>
  );
}

export default AddList;
