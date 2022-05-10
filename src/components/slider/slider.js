import React, { useState } from "react";
import dataSlider from "./dataSlider";
import "./slider.css";

const Slider = () => {
  const [position, setPosition] = useState(-300);
  const pos = `translateX(${position}%)`;

    function leftMove() {
        if (position <= 0){
      setPosition(position + 100);}
      if (position >= 0) {
          setPosition((position) => (position = -400))
      }
    }

    function rightMove() {
        if (position >= -300){
      setPosition(position - 100);}
      if (position < -301){
        setPosition((position) => (position = `000`));}
    }

  return (
    <div className="slider">
        <button onClick={leftMove}>-</button>
         <div className="container-slider">
        <div className="page-container">
          {dataSlider.map((prev, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${prev.bgcolor})`,
                transform: `${pos}`,
                transitionDuration: `0.5s`,
                backgroundSize: 'cover'
              }}
            >
            </div>
          ))}
        </div>
      </div>
      <button onClick={rightMove}>+</button>

    </div>
  );

};
export default Slider;
