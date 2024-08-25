import React from 'react';
import img from '../images/sun_img.png'

const Card = () => {
  return (
    <>
        <div className="border-2 border-gray-300 rounded-3xl flex flex-col justify-center items-center shadow-gray-600 shadow-lg">
          <div className="font-bold text-2xl">Day</div>
          <img src={img} className="rounded-2xl border-gray-300 w-32 mt-2" alt="img" />
          <div className="text-2xl mt-2">21*C</div>
        </div> 
    </>
  )
}

export default Card
