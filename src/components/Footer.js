import React from 'react';
import logoWhite from '../assets/logoWhite.svg'

function Footer() {
    return (
        <footer>
            <img src={logoWhite} alt='agence Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;