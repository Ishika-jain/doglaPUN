import React from "react";
import "./Dekho.css";

import Video from "../../assets/medical.mp4";

function Dekho() {
  return (
    <div className="Dekho">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>For your better health</h1>
        <h2>we care for you</h2>
      </div>
    </div>
  );
}

export default Dekho;
