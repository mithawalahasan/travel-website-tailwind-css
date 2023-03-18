import React from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image4 from "../assets/Image4.jpg";
import "./Destinations.css";
function Destinations() {
  return (
    <div className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Carribean's Best Beaches</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Image1} alt="image" />
          <img src={Image2} alt="image" />
          <img src={Image5} alt="image" />
          <img src={Image6} alt="image" />
          <img src={Image4} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
