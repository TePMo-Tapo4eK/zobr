import React, { useState } from "react";
import "./css-comp/pagefilms.css";
import FilmItem from "./FilmItem";
import FilmModal from "./FilmModal";
import FindFilm from "./FindFilm";

const PageFilms = () => {
  const [modalActive, setModalActive] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [discription, setDiscription] = useState("");
  const [authors, setAuthors] = useState("");
  const [actors, setActors] = useState("");
  const [genre, setGenre] = useState("");
  const [url1, setUrl1] = useState("");
  const [filmk , setFilmk] = useState([])

  

   
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
      url: '',
      url1: ''
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
      url: '',
      url1: 723959
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
      url: '',
      url1: 582358
    },
    {
      id: '3',
      image: '',
      title: 'Бумажный дом',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1046206'
    },
    {
      id: '4',
      image: '',
      title: 'Половое воспитание',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '775209'
    },
    {
      id: '5',
      image: '',
      title: 'Элита',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1117735'
    },
    {
      id: '6',
      image: '',
      title: 'Люцифер',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '893621'
    },
    {
      id: '7',
      image: '',
      title: 'Как продать наркотики онлайн',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1246988'
    },
    {
      id: '8',
      image: '',
      title: 'Псы резервации',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '4296469'
    },
    {
      id: '9',
      image: '',
      title: 'Уэйн',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1167154'
    },
    {
      id: '10',
      image: '',
      title: 'Тетрадь смерти',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '406148'
    },
    {
      id: '11',
      image: '',
      title: 'Основные принципы добра',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '719608'
    },
    {
      id: '12',
      image: '',
      title: 'Все радостные места',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '894972'
    },
    {
      id: '13',
      image: '',
      title: 'Думаю как все закончить',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1219852'
    },
    {
      id: '14',
      image: '',
      title: 'Химические сердца',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1272735'
    },
    {
      id: '15',
      image: '',
      title: 'Мне это не нравится',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1261983'
    },
    {
      id: '16',
      image: '',
      title: 'Назови меня своим именем',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '979148'
    },
    {
      id: '17',
      image: '',
      title: 'В поисках Аляски',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '929473'
    },
    {
      id: '18',
      image: '',
      title: 'Леденящие душу приключения Сабрины',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1108352'
    },
    {
      id: '19',
      image: '',
      title: 'Конец ***го мира',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: ''
    },
    {
      id: '20',
      image: '',
      title: 'Нетипичный',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '1046641'
    },
    {
      id: '21',
      image: '',
      title: 'Очень странные дела',
      discription: '',
      authors: '',
      actors: '',
      genre: '',
      year: '',
      url: '',
      url1: '915196'
    }
  ];

  return (
    <div className="films_item">

    <FindFilm/>
    <h1 className="our">Наша подборка</h1>
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
