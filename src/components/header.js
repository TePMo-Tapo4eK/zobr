import React from "react";
import "./css-comp/header.css"

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_logo">
          <p>zobr</p>
        </div>
        <ul>
          <li><a className="link">Частые вопросы</a></li>
          <li><a className="btn">Создать комнату</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
