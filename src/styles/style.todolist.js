//할 일 목록 스타일
import { styled } from "styled-components";

const StyleTodo = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 100%;
  margin: 15px;
  height: ${(props) => props.height || "90px"};
  padding: 0px 12px;
`;

const StyleTodoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleSelectButton = styled.button`
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(221, 221, 221);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;

export { StyleTodo, StyleTodoTitle, StyleSelectButton };
