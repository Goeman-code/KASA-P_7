import React from "react";
import kw from '../assets/kw.svg'
import a1w from '../assets/a1w.svg'
import sw from '../assets/sw.svg'
import a2w from '../assets/a2w.svg'
import '../styles/footer.css'

export default function footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={kw} alt="k" className="letters-k"></img>
                <img src={a1w} alt="a1" className="letters"></img>
                <img src={sw} alt="s" className="letters"></img>
                <img src={a2w} alt="a2" className="letters"></img>
            </div>
            <div className="footer-trademark">
                <p className="footer-trademark-text">© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}