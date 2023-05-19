import React from "react";
import { Link } from "react-router-dom"
import '../styles/error.css'

export default function error() {
    return (
        <div className="error">
            <h3 className="error-404 color-error">404</h3>
            <h1 className="error-oups color-error">Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/" className="error-link hover-underline-animation color-error">Retourner sur la page d'accueil</Link>
        </div>
    )
}