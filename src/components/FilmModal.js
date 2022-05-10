import React from "react";
import "./css-comp/film-modal.css";
import img from "./images/1.jpg";
import { Link } from "react-router-dom";

const FilmModal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "film_modal-screen active" : "film_modal-screen"}
      onClick={() => setActive(false)}
    >
      <div className="film_modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="film-main">
        
        <img alt="oblojka" src={img} />
        <div className="film_about">
          <div className="film_info">
            <div className="film_discription">
              <div className="film_main-title">
                <div className="title-titles">
                  <h1 className="film-title">13 Причин почему</h1>
                  <h2 className="film-title">13 reason why</h2>
                  <p className="film_genre">драма, детектив</p>
                </div>
                <p className="year">2020</p>
              </div>
              <div className="film_plot">
                <h3>
                  <b>Сюжет</b> : Однажды Клэй Дженсен находит на пороге своего
                  дома коробку с аудиокассетами, записанными Ханной Бейкер. Он
                  был влюблен в эту девушку в школе, пока она однажды не
                  покончила жизнь самоубийством. В своих записях Ханна указала
                  13 причин, которые толкнули её на это. И Клэй - одна из них.
                </h3>
              </div>
              <div className="film_persons">
                <h3>
                  <b>Актеры</b> : Дилан Миннетт, Кэтрин Лэнгфорд, Кейт Уолш,
                  Кристиан Наварро, Майлс Хейзер
                </h3>
                <h3>
                  <b>Режиссеры </b>: Джессика Ю, Кайл Патрик Альварез, Грегг
                  Араки
                </h3>
              </div>
            </div>
            <div className="film_btn">
              <Link className="btn" to='/film'>
                Выбрать фильм и создать комнату
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmModal;
