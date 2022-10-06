import React from "react";
import "./css-comp/film-item.css";
import { Link } from "react-router-dom";

const FilmItem = (props) => {

  // const Change = () => {
  //   console.log(props.title)
  //   props.setActive(true)
  //   props.setTitle(props.title)
  //   props.setYear(props.year)
  //   props.setDiscription(props.discription)
  //   props.setGenre(props.genre)
  //   props.setActors(props.actors)
  //   props.setAuthors(props.authors)
  //   props.setUrl1(props.url1)
  // }

  return (
    <Link to={`/films/${props.filmId}`} className="film_item" >
      <div className="film_item-preview" style={{backgroundImage: `url(${props.posterUrlPreview})` }}></div>
      <h1 className="film-title">{props.title}</h1>
      <div className="film_item-description">
        <h2>{props.year}</h2>
        <p>⁃</p>
        <p className="film-janr">{props.genre}</p>
      </div>
      
    </Link>
  );
};

export default FilmItem;
