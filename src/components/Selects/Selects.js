import React from "react";
import "./Selects.css";

import neurology from "../../assets/neurology.png";
import cardiology from "../../assets/cardiology.png";
import orthopedic from "../../assets/orthopedic.png";
import dental from "../../assets/dental.png";
import urology from "../../assets/urology.png";
import physician from "../../assets/physician.png";
import SelectsImg from "../SelectsImg/SelectsImg";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={neurology} text="Neurology" />
        <SelectsImg bgImg={cardiology} text="Cardiology" />
        <SelectsImg bgImg={orthopedic} text="Orthopedic" />
        <SelectsImg bgImg={dental} text="Dental" />
        <SelectsImg bgImg={urology} text="Urology" />
        <SelectsImg bgImg={physician} text="Physician" />
      </div>
    </div>
  );
}

export default Selects;
