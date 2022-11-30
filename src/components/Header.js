import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt='agence Kasa' className='imgHeader'/>
            <nav>
                <Link to="/" className='navHeader'>Accueil</Link>
                <Link to="/Propos" className='navHeader'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header