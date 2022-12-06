import React from 'react';
import products from "../data/product.json";
import { Link } from "react-router-dom";

// ---------- card type par default ------------
    //au cas ou une image serai manquante
// function CardImgFound({cover, title = "Titre indisponible"}) {

//     return (
//         <Link to={`/logement/${products.id}`} className = "card_caroussel">
//             <img className='card_caroussel_img' src={cover} alt="Images non disponible"/>
//             <div className='card_caroussel_color'></div>
//             <div className='card_caroussel_text'><h2>{title}</h2></div>
//             <div className='card_caroussel_black'></div>
//         </Link>
//     );
// }

// ---------- card type ---------
    //avec un titre par default si celui-ci est manquant
// function CardItem({cover, title = "Titre indisponible"}) {
//     return (
//         <Link to="/logement/:id" className = "card_caroussel">
//             <img className='card_caroussel_img' src={cover} alt="location disponible"/>
//             <div className='card_caroussel_color'></div>
//             <div className='card_caroussel_text'><h2>{title}</h2></div>
//         </Link>)
// }

// //Je verifie les informations pour l'affichage de l'une des card







//------------------------------------------------------------------------
// ------------------------ VERSION VALIDE -------------------------------
//------------------------------------------------------------------------

function Cards() {
     return products.map((product) =>
        <Link to={`/logement/${product.id}`} className = "card_caroussel" key={product.id}>
            <img className='card_caroussel_img' src={product.cover} alt="location disponible"/>
            <div className='card_caroussel_color'></div>
            <div className='card_caroussel_text'><h2>{product.title}</h2></div>
        </Link>)
}

export default Cards;