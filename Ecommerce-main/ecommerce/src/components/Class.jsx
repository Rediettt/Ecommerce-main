import React from 'react'

function Class({setTab, tab, navTab}) {
  return (
    <div className=" text-white flex items-center justify-center md:w-full my-4">
        <div className="md:flex md:space-x-8">
        <button className={tab === 1 ? `bg-slate-800 text-white p-3 w-[400px] md:w-[150px]`: `bg-gray-200 text-black p-3 w-[400px] md:w-[150px] shadow-md border-[3px] border-black`} onClick={() =>{setTab(1)}}>WOMEN</button>
        <button className={tab === 2 ? `bg-slate-800 text-white p-3 w-[400px] md:w-[150px]`: `bg-gray-200 text-black p-3 w-[400px] md:w-[150px] shadow-md border-[3px] border-black`} onClick={() =>{setTab(2)}}>MEN</button>
        <button className={tab === 3 ? `bg-slate-800 text-white p-3 w-[400px] md:w-[150px]`: `bg-gray-200 text-black p-3 w-[400px] md:w-[150px] shadow-md border-[3px] border-black`} onClick={() =>{setTab(3)}}> CHILDREN</button>
        </div>
    </div>
  )
}

export default Class