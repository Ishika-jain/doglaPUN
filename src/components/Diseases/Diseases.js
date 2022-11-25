import React from "react";
import "./Diseases.css";

import apollo from "../../assets/apollo.jpeg";
import aster from "../../assets/aster.jpeg";
import manipal from "../../assets/manipal.jpeg";
import sagar from "../../assets/sagar.jpeg";
import sakra from "../../assets/sakra.jpeg";

function Diseases() {
  return (
    <div name="diseases" className="diseases">
      <div className="container">
        <h2 className="best-hospitals">Best Hospitals</h2>
        <p>Find the top hospitals in Bangalore</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={apollo} alt="/" />
          <img src={aster} alt="/" />
          <img src={manipal} alt="/" />
          <img src={sagar} alt="/" />
          <img src={sakra} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Diseases;
