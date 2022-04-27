import React from "react";
import "./css-comp/joinroom.css";
import { Link } from "react-router-dom";

const JoinRoom = () => {
  return (
    <div className="join_page">
      <div className="join_room">
        <div className="inp_data">
        <p>Подключение к комнате</p>
          <input type="text" placeholder="Никнейм" />
          <input type="text" placeholder="Имя комнаты" />
          <input type="text" placeholder="Пароль" />
        </div>
        <div className="send_data">
          <Link to="/" className="btn">
            Присоединиться к комнате
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JoinRoom;
