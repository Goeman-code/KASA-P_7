import React from "react";
import { Link } from "react-router-dom"
import Card from '../components/cards'
import Logements from '../logements.json'
import '../styles/home.css'

export default function home() {
    let stringLog = JSON.stringify(Logements)
    let validLog = JSON.parse(stringLog)
    console.log(validLog)

    return (
        <div>
            <div className="section-1">
                <p className="section-1-texte">Chez vous, partout et ailleurs</p>
            </div>
            <div className="home-cards">
            {validLog.map((logement) => (
                    <Card title={`${logement.title}`} cover={`${logement.cover}`} id={`${logement.id}`} />
                ))}
            </div>
        </div>
    )
}