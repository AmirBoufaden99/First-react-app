import React from 'react'
import "../Styles/Home.css";
import Card from "../components/card.jsx"

export default function 
() {
  return (
    <div className='homeContainer'>
        <div className='Para'>
            <p id="p1">Devenir développeur web et réaliser ses projets professionnels</p>
            <p id="p2">Des formations diplômantes faites par des experts plus que passionnés
            pour vous mener au succès professionnel.
            </p>
        </div>
        <div className='elements'>
            <Card />
            <Card />
            <Card />
        </div>
        <div className='elements2'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}
