import React from "react";
import { useParams, Navigate } from "react-router-dom";

//importation de mes composants
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";

// importation des données
import products from "../data/product.json";

//fonction qui retourne ma page logement
function Logement() {
  //je recupere d'id dans l'url  pour obtenir le 1er objet correspondant dans le fichier json
  const id = useParams();
  const detailLogement = products.find((logement) => logement.id === id.id);

  return (
    <>
      {detailLogement ? (
        <section className="corpLogement">
          <section className="carousel">
            <Carousel pictures={detailLogement.pictures} />
          </section>
          <section className="corpLogement_bloc">
            <div className="corpLogement_bloc_title">
              <h1>{detailLogement.title}</h1>
              <h2>{detailLogement.location}</h2>
              <div className="sizeBlocTag">
                <Tag tags={detailLogement.tags} />
              </div>
            </div>
            <div className="corpLogement_bloc_autor">
              <div className="corpLogement_bloc_autor_identity">
                <p>{detailLogement.host.name}</p>
                <img
                  src={detailLogement.host.picture}
                  className="hostPicture"
                  alt="icone éditeur"
                />
              </div>
              <div className="bloc_starRating">
                <Rating rating={detailLogement.rating} />
              </div>
            </div>
          </section>
          <section className="corpLogement_detail">
            <Dropdown
              title="Description"
              description={detailLogement.description}
            />
            <Dropdown
              title="Équipement"
              description={detailLogement.equipments}
            />
          </section>
        </section>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default Logement;
