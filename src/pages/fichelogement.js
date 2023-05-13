import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Logements from '../logements.json'
import Collapse from '../components/collapse'
import Stars from "../components/stars";
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/fichelogement.css'

export default function Fichelogement() {

    let currentId = useParams()
    const [id] = useState(currentId.id.replace(":", ""))
    const lodging = Logements.find(logement => logement.id === id)
    const [image, setImage] = useState(0)

    if (!lodging === true) {
        return <Navigate to="*" />
    }
    
    const lastIndex = lodging.pictures.length - 1

    const handleLeftArrowClick = () => {
        if (image === 0) {
            setImage(lastIndex)
        } else {
            setImage(image - 1)
        }
    }

    const handleRightArrowClick = () => {
        if (image === lastIndex) {
            setImage(0)
        } else {
            setImage(image + 1)
        }
    }

    let currentImage = lodging ? lodging.pictures[image] : null;
    let hostName = lodging.host.name.split(" ")
    let firstName = hostName[0]
    let lastName = hostName[1]
    let numberOfStars = Number(lodging.rating)
    let equipmentListe = lodging.equipments.map((equipment) => <div key={equipment}>{equipment}</div>)

    return (
        <div>
            <div className="slider" 
            style={{ backgroundImage: `url(${currentImage})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat" }}>
                <img src={arrowLeft} alt="arrow" className="arrow" onClick={handleLeftArrowClick}></img>
                <p className="slider-count">{`${image + 1}/${lodging.pictures.length}`}</p>
                <img src={arrowRight} alt="arrow" className="arrow" onClick={handleRightArrowClick}></img>
            </div>
            <div className="fichelogement-Bigsection">
                <div className="fichelogement-section-1">
                    <div className="fichelogement-section-1-infos">
                        <p className="color color-titre">{lodging.title}</p>
                        <p className="color">{lodging.location}</p>
                    </div>
                    <div className="fichelogement-section-2-tagbox">
                    {lodging.tags.map((tag, index) => (
                        <div className="fichelogement-section-2-tag" key={index}>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
                </div>
                <div className="fichelogement-section-2">
                    <div className="fichelogement-section-1-proprio">
                        <div className="host-name-shrink">
                            <p className="color">{firstName}</p>
                            <p className="color">{lastName}</p>
                        </div>
                        <img alt="propriétaire" src={lodging.host.picture} className="fichelogement-section-1-proprio-picture"
                        style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}>
                        </img>
                    </div>
                    <Stars rating={numberOfStars} />
                </div>
            </div>
            <div className="fichelogement-section-3">
                <div className="collapse-fichelogement">
                    <Collapse titre="Description" texte={lodging.description} />
                </div>
                <div className="collapse-fichelogement">
                    <Collapse titre="Équipement" texte={equipmentListe} />
                </div>
            </div>
        </div>
    )                   
}