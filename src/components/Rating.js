import React from "react";

//importation des etoile de notation
import Star from "../assets/star.svg";
import StarColor from "../assets/starColor.svg";

//fonction qui retourne l'affichage de la notation en fonction du rating du fichier json
function Rating(props) {
  //configuration de la notation sur une echelle de 5/5
  const notes = [1, 2, 3, 4, 5];

  //je retourne des "star" de couleur en fonction de la note du fichier json
  //je comble la différence avec des "star" grise
  return (
    <>
      {notes.map((note, id) =>
        props.rating >= note ? (
          <img
            src={StarColor}
            key={id}
            className="sizeStar"
            alt="etoile de notation"
          ></img>
        ) : (
          <img
            src={Star}
            key={id}
            className="sizeStar"
            alt="etoile de notation"
          ></img>
        )
      )}
    </>
  );
}

export default Rating;
