import React from "react";
import "./Selects.css";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image4 from "../assets/Image4.jpg";
import Image7 from "../assets/Image7.jpg";
import Selectimg from "./Selectimg";
const object = [
  { id: 1, img: Image1, text: "BoraBora" },
  { id: 2, img: Image2, text: "Borabados" },
  { id: 3, img: Image4, text: "Maldives" },
  { id: 4, img: Image5, text: "Grenada" },
  { id: 5, img: Image6, text: "EmeraldBay" },
  { id: 6, img: Image7, text: "KeyWest" },
];

function Selects() {
  return (
    <div className="selects">
      <div className="container">
        {object.map((obj) => {
          return <Selectimg key={obj.id} object={obj} />;
        })}
      </div>
    </div>
  );
}

export default Selects;
