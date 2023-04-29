import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-full flex items-center justify-center">
    <div className="w-full">
      <div className="text-center text-2xl text-gray-600">
        Find your Elegance, Find your Niche
      </div>
      <div className="text-center text-[60px] font-bold">
        Exclusively Designed for you
        <button className=" mx-3 py-3 px-8 border-black border-[2px] bg-slate-800 text-white text-xl">SHOP NOW</button>
      </div>
    </div> 
  </div>
  )
}

export default Header