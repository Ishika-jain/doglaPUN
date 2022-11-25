import React from "react";
import "./SelectsImg.css";

function SelectsImg({ bgImg, text }) {
  return (
    <div>
      <div className="selects-location">
        <img src={bgImg} alt="/" />
        <div className="overlay">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SelectsImg;
