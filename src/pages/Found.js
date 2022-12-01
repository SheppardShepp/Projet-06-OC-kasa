import React from 'react';
import { Link } from "react-router-dom";

function Found() {
    return (
        <div className='pageError'>
            <p>404</p>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/" >Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Found;