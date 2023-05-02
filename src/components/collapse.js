import React from "react";
import { useState } from 'react';
import arrow from '../assets/arrow.svg'
import '../styles/collapse.css'

export default function Apropos(infos) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
      setIsOpen(!isOpen);
    }

    return (
    <div className="collapse">
        <div className="collapse-barre">
            <p>{infos.titre}</p>
            <img src={arrow} alt="arrow" className={`collapse-barre-arrow ${isOpen ? 'collapse-barre-arrow--open' : ''}`} onClick={handleToggle}></img>
        </div>
        <div className={`collapse-texte ${isOpen ? 'collapse-texte--open' : ''}`}>
            <p className="collapse-texte-p">{infos.texte}</p>
        </div>
    </div>
    )
}