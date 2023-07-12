import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailTodo } from "../../api/todos";
import { useQuery } from "react-query";
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

  //할일 조회
  const { isLoading, isError, data } = useQuery("todo", () =>
    getDetailTodo(id)
  );
  // console.log("⏩⏩data", data);
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

  //수정 할 시 UI 변경을 위한 것
  const isUpdateTodo = () => {
    setIsUpdate(!isUpdate);
    console.log("!업데이트 유무!", isUpdate);
  };

  //할 일 수정

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
            <StyleUpdateInput w="40%"></StyleUpdateInput>
          </StyleDiv>
          <div>작성자: {data.name}</div>
          <StyleUpdateInput w="100%" h="350px"></StyleUpdateInput>
        </>
      )}

      <div>
        <StyleInputButton mt="50px" onClick={isUpdateTodo}>
          {isUpdate ? "완료 하기" : "수정 하기"}
        </StyleInputButton>
      </div>
    </LayoutDiv>
  );
}

export default DetailTodo;
