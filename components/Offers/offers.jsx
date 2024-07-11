import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Get the best deals on your favourite products</p>
            <button>Chech Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/> 
        </div>
    </div>

  )
}

export default Offers