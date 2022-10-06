import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css-comp/pagefilms.css";
import FilmItem from "./FilmItem";
import { Formik, Form, Field } from "formik";

const PageFilms = () => {
  const [items, setItems] = useState([])
  const [pages, setPages] = useState(0)

  useEffect(() => {
    axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`,
          {headers: {
            'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
            'Content-Type': 'application/json',
          }}
          )
          .then(function(responce) {
            console.log(responce.data)
            setItems([...responce.data.films])
            setPages(responce.data.pagesCount)
            console.log(pages)
          }
          )
    }
  , []);

  return (
    <div className="films_item">
    <Formik
      initialValues={{
        Name: '',
      }}
      onSubmit={
        (values) => {
          if (values.Name != '')
          {axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${values.Name}`, 
          {headers: {
            'X-API-KEY': '140dabd4-b4ac-4d65-b281-62e8d3b615c4',
            'Content-Type': 'application/json',
          }}
          )
          .then(function(responce) {
            console.log(responce.data)
            setItems([...responce.data.films])
          }
          )}
        } 
      }
    >
      <Form className='formik'>
        <Field className='input' name="Name" />
        <button type="submit">Искать фильм</button>
      </Form>
    </Formik>
    <h1 className="our">Наша подборка</h1>
      <div className="page_films_items">
        
        {items.map(({ ...items }) => (
          
          <FilmItem
            key={items.id}
            title={items.nameRu}
            setUrl1={items.posterUrlPreview}
            {...items}
            
          />
        ))}

      </div>
    </div>
  );
};
export default PageFilms;
