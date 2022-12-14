import React from "react";
import { Link } from "react-router-dom";

// importation des informations
import products from "../data/product.json";

function Cards() {
  return products.map((product) => (
    <Link
      to={`/logement/${product.id}`}
      className="card_caroussel"
      key={product.id}
    >
      <img
        className="card_caroussel_img cardError"
        src={product.cover}
        alt="Présentation location"
      />
      <div className="card_caroussel_color"></div>
      <div className="card_caroussel_text">
        <h2>{product.title}</h2>
      </div>
    </Link>
  ));
}

export default Cards;
