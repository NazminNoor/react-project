import React, {  useState } from 'react'
import { Link } from 'react-router-dom';

function Card({ ProductName,  BrandName ,Price , photo}) {

  return (
    <>
   <div className='flex align-middle justify-center '>
     <div className='w-72 flex flex-col gap-10 border-2 rounded-md bg-yellow-50 shadow-lg'>
        <div className='p-3 '>
            <img className='w-full rounded-md hover:scale-105 transition-all duration-500' src= {photo} alt="photo" />
        </div>
        <div className='flex flex-col gap-3 ml-5'>
            <p className='font-bold'>Product Name: { ProductName} </p>
            <p>Brand Name:  { BrandName} </p>
            <span>Price: {Price }</span>
        </div>
        <div className='flex justify-center mb-4 '>
           <div className=' flex justify-center h-12 w-full cursor-pointer mx-2 transition  hover:bg-slate-500  text-white font-medium bg-slate-600 p-3 rounded-md '>
            <Link  to ="/cardditails">View Ditails</Link>
           </div>
        </div>
    </div>
   </div>
   </> 
  )
}


export default Card