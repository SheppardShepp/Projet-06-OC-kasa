import React from "react";

//---------- gestion de la banniere ------------

function Banner(props) {
  //affichage de la banniere sur la page d'accueil
  if (props.origin === "home") {
    return (
      <section className="banniere">
        <div className="banniere_black"></div>
        <h1 className="banniere_text">Chez vous, partout et ailleurs</h1>
        <div className="banniere_img imgHome"></div>
      </section>
    );
    //affichage de la banniere sur la page à propos
  } else if (props.origin === "about") {
    return (
      <section className="banniere">
        <div className="banniere_black"></div>
        <div className="banniere_img imgPropos"></div>
      </section>
    );
  }
}

export default Banner;
