import React from "react";
import "./Car.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image4 from "../assets/Image4.jpg";
import Image7 from "../assets/Image7.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Car() {
  return (
    <div className="container">
      <Carousel
        className="car"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={Image1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image5} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Image4} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Car;
