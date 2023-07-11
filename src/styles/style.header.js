//Header 스타일
import { styled } from "styled-components";
import { createSvgIcon } from "@material-ui/core";

//home 아이콘
const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  "Home"
);

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  background-color: #dedede;
  width: 100%;
  height: 90px;
`;

export { HomeIcon, StyleDiv };
