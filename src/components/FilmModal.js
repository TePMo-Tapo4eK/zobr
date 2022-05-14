import React from "react";
import "./css-comp/film-modal.css";
import img from "./images/1.jpg";
import { Link } from "react-router-dom";

const FilmModal = (props) => {
  return (
    <div
      className={props.active ? "film_modal-screen active" : "film_modal-screen"}
      onClick={() => props.setActive(false)}
    >
      <div className="film_modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="film-main">
        
        <img alt="oblojka" src={img} />
        <div className="film_about">
          <div className="film_info">
            <div className="film_discription">
              <div className="film_main-title">
                <div className="title-titles">
                  <h1 className="film-title">{props.title}</h1>
                  <h2 className="film-title"></h2>
                  <p className="film_genre">{props.genre}</p>
                </div>
                <p className="year">{props.year}</p>
              </div>
              <div className="film_plot">
                <h3>
                  <b>Сюжет</b> : {props.discription}
                </h3>
              </div>
              <div className="film_persons">
                <h3>
                  <b>Актеры</b> : {props.actors}
                </h3>
                <h3>
                  <b>Режиссеры </b>: {props.authors}
                </h3>
              </div>
            </div>
            <div className="film_btn">
              <Link className="btn" to={`/films/${props.url}`}>
                Выбрать фильм
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
