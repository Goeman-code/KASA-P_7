import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logements from '../logements.json'
import Collapse from '../components/collapse'
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/fichelogement.css'

export default function Fichelogement() {

    const currentId = useParams()
    const [id, setId] = useState(currentId.id.replace(":", ""))
    const [lodging, setLodging] = useState(Logements.find(logement => logement.id === id))
    console.log(currentId.id.replace(":", "") === lodging.id)
    
    useEffect(() => {
        setId(currentId.id.replace(":", ""));
        setLodging(Logements.find(logement => logement.id === id));
        console.log(id)
        console.log(lodging)
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

    return (
        <div className="slider" 
        style={{ backgroundImage: `url(${currentImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat" }}>
            <img src={arrowLeft} alt="arrow" className="arrow" onClick={handleLeftArrowClick}></img>
            <img src={arrowRight} alt="arrow" className="arrow" onClick={handleRightArrowClick}></img>
        </div>
    )

}