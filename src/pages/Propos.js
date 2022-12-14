import React from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import collapses from "../data/collapse.json";

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
