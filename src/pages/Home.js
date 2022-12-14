import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Card";

// ---------- page d'accueil --------------
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
