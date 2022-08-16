import React from 'react'

export default function card(props) {
  return (
    <div>
        <div className='elems'> 
            <img src={props.src} alt={props.alt} />
            <h4>{props.title}</h4>
            <h6>{props.parag}</h6>
        </div>
    </div>
  )
}



