import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, StyleDiv } from "../../styles/style.header";

function Header() {
  return (
    <StyleDiv>
      <Link to="/">
        <HomeIcon fontSize="large" />
      </Link>
    </StyleDiv>
  );
}

export default Header;
