import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

// ------------- section header ------------

function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" className="imgHeader" />
      <nav>
        <Link to="/" className="navHeader">
          Accueil
        </Link>
        <Link to="/Propos" className="navHeader">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
