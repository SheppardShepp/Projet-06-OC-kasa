import React from "react";
import BannerAPropos from "../components/Banner/Banner_APropos";
import Dropdown from "../components/Dropdown";

function propos() {
  return (
    <section className="main">
      <BannerAPropos />
      <section className="collapse">
        <Dropdown />
      </section>
    </section>
  );
}

export default propos;
