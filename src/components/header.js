import React from "react";
import "./css-comp/header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_logo">
          <p><a href="/">zobr</a></p>
        </div>
        <ul>
          <li><a className="link">Частые вопросы</a></li>
          <li><Link className="btn" to="/create">Создать комнату</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
