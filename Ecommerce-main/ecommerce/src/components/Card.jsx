import React from 'react'

function Card({image, type, designer}) {
  return (
    <div className="w-[200px] h-[370px] my-[10%]">
        <img src={image} className="md:w-[200px] h-[300px]"/>
        <p className="mx-2">Type: {type}</p>
        <p className="mx-2">By: {designer}</p>
        <button className='p-2 bg-gray-200 text-black border-[3px] border-black'>Add to Cart</button>
    </div>
  )
}

export default Card