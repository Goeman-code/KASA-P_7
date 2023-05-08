import React from "react";
import starFull from '../assets/starFull.svg'
import starEmpty from '../assets/starEmpty.svg'

export default function Stars({rating}) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star Full" className="star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="star empty" className="star" key={i} />);
      }
    }
    return <div className="fichelogement-section-2-stars">{stars}</div>;
}