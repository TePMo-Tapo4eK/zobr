import React from "react";
import "./css-comp/joinroom.css";
import { Link } from "react-router-dom";

const CraeteRoom = () => {
  return (
    <div className="create_page">
      <div className="create_room">
        <div className="inp_data">
            <p>Создание комнаты</p>
          <input type="text" placeholder="Никнейм" />
          <input type="text" placeholder="Имя комнаты" />
          <input type="text" placeholder="Пароль" />
        </div>
        <div className="send_data">
          <Link to="/films" className="btn">
            Выбор фильма
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CraeteRoom;
