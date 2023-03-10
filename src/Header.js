import React from "react";
import "./Header.css";
import Word from "./component/Word";
import Image from "./component/icon.png";
function Header() {
  return (
    <div className="header">
      <img src={Image} alt="cactus icon" />
      <Word className="word"></Word>
      <div className="nav"></div>
    </div>
  );
}

export default Header;
