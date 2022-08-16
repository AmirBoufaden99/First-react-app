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
            <Card 
                src = "https://3wa.fr/wp-content/uploads/2020/03/card2.svg"
                alt = "image1"
                title = "1er bootcamp en France"
                parag = "4500 alumni formés depuis 2012"
            />
            <Card 
                src = "https://3wa.fr/wp-content/uploads/2020/03/card8.svg"
                alt = "image2"
                title = "Enseignées par des professionnels"
                parag = "qui partagent plus qu'une passion !"
            />
            <Card 
                src = "https://3wa.fr/wp-content/uploads/2020/03/card4.svg"
                alt = "image3"
                title = "Certifiées et reconnues"
                parag = "par l'état, le secteur et les entreprises"
            />
        </div>
        <div className='elements2'>
            <Card 
                src = "https://3wa.fr/wp-content/uploads/2020/03/card6.svg"
                title = "Testez nos cours gratuitement"
                parag = "depuis chez vous et dès maintenant !"
            />
            <Card 
                src = "https://3wa.fr/wp-content/uploads/2020/03/card5.svg"
                title = "Osez la reconversion professionnelle"
                parag = "car l'ambition est le seul pré-requis"
            />
            <Card 
            
                src = "https://3wa.fr/wp-content/uploads/2020/03/card9.svg"
                title = "Spécialisez vous davantage"
                parag = "avec des programmes pour tous niveaux"/>
        </div>
    </div>
  )
}
