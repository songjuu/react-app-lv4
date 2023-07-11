import React from "react";
import { deleteTodo, getTodos } from "../../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { LayoutDiv } from "../../styles/style.common";
import {
  StyleSelectButton,
  StyleTodo,
  StyleTodoTitle,
} from "../../styles/style.todolist";
import Background from "../../styles/style.loading";
import Spinner from "../../styles/spinner.gif";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function TodoList() {
  const navigate = useNavigate();

  //목록 삭제
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      return <h1>에러입니다!!</h1>;
    },
  });

  //목록 조회
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  // console.log("data💛💛", data);
  if (isLoading) {
    return (
      <Background>
        <img src={Spinner} alt="로딩중" width="5%" />
      </Background>
    );
  }
  if (isError) {
    return <h1>할 일 목록을 가져오지 못했습니다!</h1>;
  }

  //삭제 버튼
  const handleDeleteButtonClick = (postId) => {
    if (window.confirm("할 일을 지울까요?")) {
      mutation.mutate(postId);
    } else {
      return false;
    }
  };

  //상세페이지 이동
  const onHandlerDetailPage = (postId) => {
    navigate(`/detail/${postId}`);
  };

  return (
    <LayoutDiv>
      <div>
        <h1>내 할 일 보기</h1>
        {data.map((todo) => {
          return (
            <StyleTodo key={todo.id}>
              <StyleTodoTitle>
                <h3>{todo.title}</h3>
                <div>
                  <StyleSelectButton
                    onClick={() => onHandlerDetailPage(todo.id)}
                  >
                    상세보기
                  </StyleSelectButton>
                  <StyleSelectButton
                    onClick={() => handleDeleteButtonClick(todo.id)}
                  >
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </StyleSelectButton>
                </div>
              </StyleTodoTitle>
              <div>작성자: {todo.name}</div>
            </StyleTodo>
          );
        })}
      </div>
    </LayoutDiv>
  );
}

export default TodoList;
