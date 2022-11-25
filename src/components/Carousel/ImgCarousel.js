import React from "react";
import "./ImgCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import medical1 from "../../assets/medical1.jpg";
import medical2 from "../../assets/medical2.jpeg";
import medical3 from "../../assets/medical3.png";

function ImgCarousel() {
  return (
    <div name="carousel" className="conatiner">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={medical1} alt="/" />
          {/*<p className="legend"></p>*/}
        </div>
        <div>
          <img src={medical2} alt="/" />
          {/* <p className="legend"></p>*/}
        </div>
        <div>
          <img src={medical3} alt="/" />
          {/*  <p className="legend"></p>*/}
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
