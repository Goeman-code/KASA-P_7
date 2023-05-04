import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logements from '../logements.json'
import Collapse from '../components/collapse'
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/fichelogement.css'

export default function Fichelogement() {

    const currentId = useParams()
    const logement = Logements.find(logement => logement.id = currentId )


    const lastIndex = logement.pictures.length - 1
    const [image, setImage] = useState(0)

    const handleLeftArrowClick = () => {
        if (image === 0) {
            setImage(lastIndex)
            console.log(image)
        } else {
            setImage(image - 1)
            console.log(image)
        }
    }

    const handleRightArrowClick = () => {
        if (image === lastIndex) {
            setImage(0)
            console.log(image)
        } else {
            setImage(image + 1)
            console.log(image)
        }
    }

    let currentImage = logement.pictures[image]
    console.log(currentImage)

    return (
        <div className="slider">
            <img src={arrowLeft} alt="arrow" className="arrow" onClick={handleLeftArrowClick}></img>
            <img src={arrowRight} alt="arrow" className="arrow" onClick={handleRightArrowClick}></img>
        </div>
    )

}