import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailTodo } from "../../api/todos";
import { useQuery } from "react-query";
import { LayoutDiv, StyleInputButton } from "../../styles/style.common";
import {
  StyleContentDiv,
  StyleDiv,
  StylePrevButton,
} from "../../styles/style.detailTodo";

function DetailTodo() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("🙏id🙏", id);

  //할일 조회
  const { isLoading, isError, data } = useQuery("todo", () =>
    getDetailTodo(id)
  );
  // console.log("⏩⏩data", data);
  if (isLoading) {
    return <h1>할 일을 가져오고 있습니다!</h1>;
  }
  if (isError) {
    return <h1>할 일을 가져오지 못했습니다!🚫</h1>;
  }

  return (
    <LayoutDiv>
      <StyleDiv>
        <h1>{data.title}</h1>
        <StylePrevButton onClick={() => navigate("/list")}>
          이전으로
        </StylePrevButton>
      </StyleDiv>
      <div>작성자: {data.name}</div>
      <StyleContentDiv>{data.content}</StyleContentDiv>
      <div>
        <StyleInputButton>수정 하기</StyleInputButton>
      </div>
    </LayoutDiv>
  );
}

export default DetailTodo;
