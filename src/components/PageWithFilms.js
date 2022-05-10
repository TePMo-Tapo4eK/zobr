import React, { useState } from "react";
import "./css-comp/pagefilms.css";
import FilmItem from "./FilmItem";
import FilmModal from "./FilmModal";

const PageFilms = () => {
  const [modalActive, setModalActive] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [discription, setDiscription] = useState("");
  const [authors, setAuthors] = useState("");
  const [actors, setActors] = useState("");
  const [genre, setGenre] = useState("");
  const [url1, setUrl1] = useState("");

  const Films = [
    /* 
    
    {
      id: '',
      image: '',
      title: '',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: ''
    },

    */
    {
      id: "1",
      title: "Кремниевая долина",
      image: "",
      discription:
        "История о группе гиков, готовящих к запуску собственные стартапы в высокотехнологичном центре Сан-Франциско.Главные герои сериала бесплатно проживают в доме местного миллионера,но взамен им придётся отдать по 10% прибыли от будущих проектов.",
      authors: "Майк Джадж, Алек Берг, Джеми Бэббит",
      actors:
        "Томас Миддлдитч Джош Бренер Мартин Старр Кумэйл Нанджиани Аманда Крю Зак Вудс Мэтт Росс Джимми О. Ян Сюзанн Крайер ТиДжей Миллер",
      genre: "комедия",
      year: "2014-19",
      url: '<iframe src="//17758.svetacdn.in/DydxIp22jpcR/tv-series/287" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
      url1: 287
    },
    {
      id: "2",
      title: "13 причин почему",
      discription:
        "Однажды Клэй Дженсен находит на пороге своего дома коробку с аудиокассетами, записанными Ханной Бейкер. Он был влюблен в эту девушку в школе, пока она однажды не покончила жизнь самоубийством. В своих записях Ханна указала 13 причин, которые толкнули её на это. И Клэй - одна из них.",
      authors: "Джессика Ю, Кайл Патрик Альварез, Грегг Араки",
      actors:
        "Дилан Миннетт, Кэтрин Лэнгфорд, Кейт Уолш, Кристиан Наварро, Майлс Хейзер",
      genre: "драма, детектив",
      year: "2021",
      url: '<iframe src="//17758.svetacdn.in/DydxIp22jpcR/tv-series/1160" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
      url1: 1160
    },
  ];

  return (
    <div className="films_item">
      <div className="page_films_items">
        {Films.map(({ ...Films }) => (
          <FilmItem
            key={Films.id}
            title={Films.title}
            active={modalActive}
            setActive={setModalActive}
            setTitle={setTitle}
            setYear={setYear}
            setDiscription={setDiscription}
            setAuthors={setAuthors}
            setActors={setActors}
            setGenre={setGenre}
            setUrl1={setUrl1}
            {...Films}
          />
        ))}

        <FilmModal
          discription={discription}
          authors={authors}
          actors={actors}
          genre={genre}
          year={year}
          title={title}
          url={url1}
          active={modalActive}
          setActive={setModalActive}
        />
      </div>
    </div>
  );
};
export default PageFilms;
