import { styled } from "styled-components";

const StyleInput = styled.input`
  height: 46px;
  width: 100%;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 14px;
  border: 1px solid rgb(238, 238, 238);
`;

const StyleFormTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 40px;
`;

const StyleTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid rgb(238, 238, 238);
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
`;

export { StyleInput, StyleFormTitle, StyleTextArea };
