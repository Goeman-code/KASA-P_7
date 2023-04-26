import React from "react";
import { Link } from "react-router-dom"
import k from '../assets/k.svg'
import a1 from '../assets/a1.svg'
import s from '../assets/s.svg'
import a2 from '../assets/a2.svg'
import '../styles/banner.css'

export default function banner() {
    return (
        <div className="banner">
            <div className="banner-logo">
                <img src={k} alt="k"></img>
                <img src={a1} alt="a1"></img>
                <img src={s} alt="s"></img>
                <img src={a2} alt="a2"></img>
            </div>
            <div className="banner-link">
                <Link to="/" className="banner-link-links hover-underline-animation">Accueil</Link>
                <Link to="/apropos" className="banner-link-links hover-underline-animation">À propos</Link>
            </div>
        </div>
    )
}