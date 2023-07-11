import React from "react";
import { LayoutDiv, StyleButton } from "../../styles/style.common";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  //페이지 이동
  const onClickToLinkList = () => {
    return navigate("/list");
  };

  const onClickToLinkAddList = () => {
    return navigate("/list/add");
  };

  return (
    <LayoutDiv>
      <h1>무엇을 할까요?</h1>
      <div>
        <StyleButton onClick={onClickToLinkAddList}>
          할 일 기록하기
          <ArrowCircleRightIcon fontSize="large" />
        </StyleButton>
      </div>
      <div>
        <StyleButton onClick={onClickToLinkList}>
          할 일 목록보기
          <ArrowCircleRightIcon fontSize="large" />
        </StyleButton>
      </div>
    </LayoutDiv>
  );
}

export default Main;
