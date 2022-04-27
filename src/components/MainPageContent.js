import React from "react";
import "./css-comp/MainPageContent.css"
import { Link } from "react-router-dom";

const MainPageContent = () => {
  return (
    <div className="main_page_content">
        <div className="page_text">
            <h1 className="title">Смотри <p className="title_p">фильмы</p></h1>
            <p className="title">вместе с друзьями!</p>
            <ul className="page_btns">
                <li><Link to='/create' className="btn">Создать комнату</Link></li>
                <li><Link to='/join' className="btn">Присоединиться к существующей</Link></li>
                <li><Link to='/films'className="btn">Смотреть одному</Link></li>
            </ul>
        </div>
        <div className="page_photos">
        </div>
    </div>
  );
};
export default MainPageContent;
