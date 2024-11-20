import React from 'react'
import "./Cards.css"
const Cards = (props) => {
  return (
    <div className='cards'style={{overflow:"hidden"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz97npk7z5xNyFuxBYN0uMT6uQffiOB50Lp76siaBG8_HIBnuLHX7ALMQpHoQ3S4DEpSY&usqp=CAU" alt="" width={215} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Cards
