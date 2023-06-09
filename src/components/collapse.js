import React from "react";
import { useState } from 'react';
import arrow from '../assets/arrow.svg'
import '../styles/collapse.css'

export default function Apropos(infos) {

    /* mapper dans infos.description */

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
        <div className={`collapse-texte-padding collapse-texte ${isOpen ? 'collapse-texte--open' : ''}`}>
            <div className="inner"><div className="collapse-texte-p">{infos.texte}</div></div>
        </div>
    </div>
    )
}