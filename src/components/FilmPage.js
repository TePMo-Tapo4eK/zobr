import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './css-comp/filmpage.css'

const FilmPage = (props) => {
    const {id} = useParams()
    console.log(id)
    return(
        <div className="filmpage-window">
            <div className="filmpage-content">
                <div className="filmpage-chat">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13Zm5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3ZM9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"/></svg>
                    chat
                </div>
                <div className="filmpage-movie">
                    <iframe src={`//17758.svetacdn.in/DydxIp22jpcR/tv-series/${id}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>                
                </div>
            </div>
        </div>
    )
}

export default FilmPage