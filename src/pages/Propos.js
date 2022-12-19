import React from "react";

//importation de mes composants
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

// importation des données
import collapses from "../data/collapse.json";

//fonction qui retourne la page A Propos
function propos() {
  return (
    <section className="corpPropos">
      <Banner origin="about" />
      <section className="collapse">
        {collapses.map((texte, id) => {
          return (
            <Dropdown
              title={texte.title}
              key={id}
              description={texte.description}
            />
          );
        })}
      </section>
    </section>
  );
}

export default propos;
