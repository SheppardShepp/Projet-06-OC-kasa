import React from "react";

//importation de mes composants
import Banner from "../components/Banner";
import Cards from "../components/Card";

//fonction qui retourne la page d'accueil
function Home() {
  return (
    <section className="corpHome">
      <Banner origin="home" />
      <section className="card">
        <Cards />
      </section>
    </section>
  );
}

export default Home;
