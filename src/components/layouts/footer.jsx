import React from 'react'
import myLogo from "../../assets/imgs/logo.png";
import insta from "../../assets/imgs/instagram.png"
import linkedin from "../../assets/imgs/linkedin.png"
import yt from "../../assets/imgs/youtube.png"
import fb from "../../assets/imgs/facebook.png"
import twitter from "../../assets/imgs/twitter.png"

import "../../Styles/Footer.css";

export default function footer() {
  return (
    <div className='footerContainer'>
        <div className='containerF'>
            <img src={myLogo} alt="logo" />
            <h3>Le code d'aujourd'hui, votre emploi de demain</h3>
            <h4>Formations professionnelles pour devenir développeur web et mobile</h4>
        </div>
        <div className='social'>
             <h2>SUIVEZ-NOUS</h2>
             <img className='socialImage' src={fb} alt="" />
             <img className='socialImage' src={twitter} alt="" />
             <img className='socialImage' src={insta} alt="" />
             <img className='socialImage' src={yt} alt="" />
             <img className='socialImage' src={linkedin} alt="" />
             <hr />
        </div>
    </div>
  )
}
