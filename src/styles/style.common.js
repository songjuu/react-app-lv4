// 공통 스타일
import { styled } from "styled-components";

//레이아웃
const LayoutDiv = styled.div`
  max-width: 1300px;
  margin: 0px auto;
  padding: 0px 40px;
`;

//----------------------------------------------------------
//버튼
const StyleButton = styled.button`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  padding: 0px 20px;
  background-color: #dedede;
  margin: 20px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyleInputButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: ${(props) => props.mt};
  cursor: pointer;
`;
export { LayoutDiv, StyleButton, StyleInputButton };
