import React from "react";
import { useState } from 'react';
import arrow from '../assets/arrow.svg'
import '../styles/collapse.css'

export default function Apropos(infos) {
    const [isOpen, setIsOpen] = useState(false);
    const equipments = infos.equipment
    const equipmentsListe = equipments.map((equipment) => <li>{equipment}</li>)

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
        <div className="inner"><ul className="collapse-liste">{equipmentsListe}</ul></div>
        </div>
    </div>
    )
}