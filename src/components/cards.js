import React from "react";
import { Link } from "react-router-dom"
import '../styles/cards.css'

export default function cards(logement) {
    return (
        <Link to={`/fichelogement/:${logement.id}`} className="card" 
        style={{ backgroundImage: `url(${logement.cover})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat" }}>
                <div className="card-content">
                    <div className="card-content-box">  
                        <p className="card-titre">{logement.title}</p>
                    </div>
                </div>
        </Link>
    )
}