import React from "react";
import "./Selectimg.css";

function Selectimg(props) {
  return (
    <div className="selects-location">
      <img src={props.object.img} alt="/" />
      <div className="overlay">
        <p>{props.object.text}</p>
      </div>
    </div>
  );
}

export default Selectimg;
