import React from "react";
import Star from "../assets/star.svg";
import StarColor from "../assets/starColor.svg";

function Rating(props) {
  const notes = [1, 2, 3, 4, 5];

  return (
    <>
      {notes.map((note, id) =>
        props.rating >= note ? (
          <img src={StarColor} key={id} className="sizeStar" alt=""></img>
        ) : (
          <img src={Star} key={id} className="sizeStar" alt=""></img>
        )
      )}
    </>
  );
}

export default Rating;
