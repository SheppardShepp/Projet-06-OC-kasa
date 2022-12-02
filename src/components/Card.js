import React from 'react';
import products from "../data/product.json";
import CardError from "../components/CardError";

function CardItem(props) {
    if (!props.cover ) {
        return <CardError />
    }
    return <Card cover={props.cover} title={props.title}/>
}

function Card({cover, title = "Titre indisponible"}) {
    return (
        <article className = "card_caroussel">
            <img className='card_caroussel_img' src={cover} alt="location disponible"/>
            <div className='card_caroussel_color'></div>
            <div className='card_caroussel_text'><h2>{title}</h2></div>
        </article>)
}

function CardList() {
    return products.map((product) =>
        <CardItem cover={product.cover} title={product.title}/>
    )
}

export default CardList;