import { hover } from "@testing-library/user-event/dist/hover";
import { styled } from "styled-components";

const StyleInputLabel = styled.label`
  margin-right: 10px;
  margin-left: 10px;
`;

const StyleCommentInput = styled.input`
  width: 50px;
  width: ${(props) => props.width || "15%"};
  height: 30px;
  border: 2px solid rgb(221, 221, 221);
  border-radius: 8px;
  display: flex;
  padding: 0px 10px;
`;

const StyleCommentForm = styled.form`
  display: flex;
  align-items: center;
`;

const StyleCommentButton = styled.button`
  margin-left: 20px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
`;

const StyleCommentDeleteButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  margin-left: 95%;
`;

const StyleCommentBox = styled.div`
  margin-top: 20px;
`;

export {
  StyleInputLabel,
  StyleCommentInput,
  StyleCommentForm,
  StyleCommentButton,
  StyleCommentDeleteButton,
  StyleCommentBox,
};
