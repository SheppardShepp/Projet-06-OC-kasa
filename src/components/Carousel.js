import React from "react";
import { useState } from "react";

function Carousel(props) {
  // je configure le statut de mes chevrons sur 0
  let [slid, setSlid] = useState(0);

  //parametrage de mes chevrons
  const previousSlide = () => {
    slid + 1 <= 1 ? setSlid(props.pictures.length - 1) : setSlid(slid - 1);
  };
  const nextSlide = () => {
    slid + 1 >= props.pictures.length ? setSlid(0) : setSlid(slid + 1);
  };

  return (
    <>
      <img
        src={props.pictures[slid]}
        className="carousel_size"
        alt="Aperçue Logement"
      />
      <div className="carousel_backBlack"></div>
      {props.pictures.length !== 1 && (
        <>
          <div className="carousel_chevron">
            <i onClick={previousSlide} className="fa-solid fa-chevron-left"></i>
            <i onClick={nextSlide} className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="carousel_compteur">
            {slid + 1}/{props.pictures.length}
          </div>
        </>
      )}
    </>
  );
}

export default Carousel;
