import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logements from '../logements.json'
import Collapse from '../components/collapse'
import CollapseUl from '../components/collapseUl'
import Stars from "../components/stars";
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/fichelogement.css'

export default function Fichelogement() {

    const currentId = useParams()
    const [id, setId] = useState(currentId.id.replace(":", ""))
    const [lodging, setLodging] = useState(Logements.find(logement => logement.id === id))
    
    useEffect(() => {
        setId(currentId.id.replace(":", ""));
        setLodging(Logements.find(logement => logement.id === id));
    }, [id, currentId, lodging]);

    const lastIndex = lodging.pictures.length - 1
    const [image, setImage] = useState(0)

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
            <div className="fichelogement-section-1">
                <div className="fichelogement-section-1-infos">
                    <h1 className="color">{lodging.title}</h1>
                    <p className="color">{lodging.location}</p>
                </div>
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
            </div>
            <div className="fichelogement-section-2">
                <div className="fichelogement-section-2-tagbox">
                    {lodging.tags.map((tag) => (
                        <div className="fichelogement-section-2-tag">
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
                <Stars rating={numberOfStars} />
            </div>
            <div className="fichelogement-section-3">
                <div className="collapse-fichelogement">
                    <Collapse titre="Description" texte={lodging.description} />
                </div>
                <div className="collapse-fichelogement">
                    <CollapseUl titre="Équipement" equipment={lodging.equipments} />
                </div>
            </div>
        </div>
    )

}