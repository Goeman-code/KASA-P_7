import React from "react";
import Card from '../components/cards'
import Logements from '../logements.json'
import '../styles/home.css'

export default function home() {
    return (
        <div>
            <div className="section-1">
                <p className="section-1-texte">Chez vous, partout et ailleurs</p>
            </div>
            <div className="home-cards">
            {Logements.map((logement) => (
                    <Card title={`${logement.title}`} cover={`${logement.cover}`} id={`${logement.id}`} key={`${logement.id}`} />
                ))}
            </div>
        </div>
    )
}