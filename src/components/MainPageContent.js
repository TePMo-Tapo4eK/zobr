import React from "react";
import "./css-comp/MainPageContent.css"
import Img1 from './images/1.jpg'
import Img2 from './images/2.webp'
import Img3 from './images/3.jpg'
import Img4 from './images/4.webp'
import { Link } from "react-router-dom";

const MainPageContent = () => {
  return (
    <div className="main_pahe_content">
        <div className="page_text">
            <p className="title">Смотри <p className="title_p">фильмы</p></p>
            <p className="title">вместе с друзьями!</p>
            <ul className="page_btns">
                <li><Link to='/create' className="btn">Создать комнату</Link></li>
                <li><Link to='/join' className="btn">Присоединиться к существующей</Link></li>
                <li><Link to='/films'className="btn">Смотреть одному</Link></li>
            </ul>
        </div>
        <div className="page_photos">
            <img alt='img' src={Img1} className="main_page_img one"/>
            <img alt='img' src={Img2} className="main_page_img two"/>
            <img alt='img' src={Img3} className="main_page_img three"/>
            <img alt='img' src={Img4} className="main_page_img four"/>
            <img alt='img' src={Img1} className="main_page_img one"/>
            <img alt='img' src={Img2} className="main_page_img two"/>
        </div>
    </div>
  );
};
export default MainPageContent;
