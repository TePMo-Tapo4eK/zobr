import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css-comp/FindFilm.css';



const FindFilm = () => {

    

    const [kpId, setKpId] = useState('')

    const change = (event) => {
        setKpId(event.target.value)
    }

    return(
        <div className="findfilm">
            <input type="number" placeholder="kinopoisk ID" value={kpId} onChange={change}></input>
            <Link className="btn" to={`/films/${kpId}`}><p>Перейти к фильму</p></Link>
        </div>
    )
}

export default FindFilm