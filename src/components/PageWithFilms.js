import React, { useState } from "react";
import "./css-comp/pagefilms.css";
import FilmItem from "./FilmItem";
import FilmModal from "./FilmModal";

const PageFilms = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="films_item">
      <div className="page_films_items">
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmItem active={modalActive} setActive={setModalActive}/>
        <FilmModal active={modalActive} setActive={setModalActive}/>
      </div>
    </div>
  );
};
export default PageFilms;
