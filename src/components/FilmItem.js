
import React from "react";
import "./css-comp/film-item.css";

const FilmItem = ({active, setActive}) => {
    return (
        <div className="film_item" onClick={() => (setActive(true))}>
            <div className="film_item-preview"></div>
            <h1 className="film-title">13 причин почему</h1>
            <div className="film_item-description">
                <h2>2020</h2>
                <p>⁃</p>
                <p className="film-janr">драма, детектив</p>
            </div>
        </div>
    )
}

export default FilmItem