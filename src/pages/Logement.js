import React from "react";
import { useParams, Navigate } from "react-router-dom";

//importation de mes composants
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";

// importation des informations
import products from "../data/product.json";

function Logement() {
  const id = useParams();
  const detailLogement = products.find((logement) => logement.id === id.id);

  return (
    <>
      {detailLogement ? (
        <section className="corpLogement">
          <section className="carousel">
            <Carousel pictures={detailLogement.pictures} />
          </section>

          <section className="corpLogement_title" /* detail */>
            <div className="" /*  */>
              <h1>{detailLogement.title}</h1>
              <h2>{detailLogement.location}</h2>
              <div>
                <Tag />
              </div>
            </div>
            <div className="" /* note et createur*/>
              <div>
                <p>{detailLogement.host.name}</p>
                <img src={detailLogement.host.picture} alt="icone éditeur" />
              </div>
              <div>note{/* rating */}</div>
            </div>
          </section>
          <div className="" /* espace dropdown */>
            <Dropdown
              title="Description"
              description={detailLogement.description}
            />
            <Dropdown
              title="Équipement"
              description={detailLogement.equipments}
            />
          </div>
        </section>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default Logement;
