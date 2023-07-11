import { styled } from "styled-components";

const StyleDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleContentDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 350px;
  border: 2px solid rgb(221, 221, 221);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const StylePrevButton = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 238, 238);
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;

export { StyleDiv, StyleContentDiv, StylePrevButton };
