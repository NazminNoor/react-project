import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Item/Form";

function CardDitails() {
  const [form, setform] = useState(false);
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="\src\assets\photo.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>

          {form ? (
             <form action="" className='border-2 p-5 flex flex-col gap-5 bg-white shadow-lg rounded-md'>
             <div className='flex flex-col '>
             <label htmlFor="Recomendtion " className='font-semibold font-sans mb-2'>Recomendtion Tittel</label>
             <input type="text" placeholder='Recomendtion Tittel' className='bg-slate-100 p-2 rounded-md'/>
             </div>
     
             <div className='flex flex-col '>
             <label htmlFor="Recomendtion " className='font-semibold font-sans mb-2' >Recommended Product Name</label>
             <input type="text" placeholder='Recommended Product Name' className='bg-slate-100 p-2 rounded-md'/>
             </div>
     
             
             <div className='flex flex-col '>
             <label htmlFor="Recomendtion " className='font-semibold font-sans mb-2'>Recommended Product Image</label>
             <input type="file" placeholder='Recommended Product Image ' className='bg-slate-100 p-2 rounded-md focus:outline-none'/>
             </div>
     
             
             <div className='flex flex-col '>
             <label htmlFor="Recomendtion " className='font-semibold font-sans mb-2'>Recommendation Reason</label>
             <input type="text" placeholder='Recommendation Reason' className='bg-slate-100 p-2 rounded-md'/>
             </div>
     
             <button onClick={()=>{setform(false)}}> submit Recomendtion</button>
           
           </form>
          ) : (
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Query Title:
                <span className="dark:text-violet-600">Hybrid bike with</span>
                disc brakes
              </h1>

              <div className="flex gap-10 my-10">
                <div>
                  <p>
                    <span className="font-bold"> Product Name:</span> Retro
                    Cruiser{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">
                      Boycotting reason details:
                    </span>{" "}
                    None
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">Recommendation Count:</span> 34
                  </p>
                </div>
                <div>
                  <p className="text-slate-800">
                    {" "}
                    <span className="font-bold text-black">
                      Brand Name:
                    </span>{" "}
                    Classic Rides
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">Date Posted:</span> 2024-04-21
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-slate-600 transition  hover:bg-slate-500  text-white"
                >
                  View All Recomendation
                </button>
                <button
                  rel="noopener noreferrer"
                  onClick={()=>{setform(true)}}
                  
                  className="px-8 py-3 text-lg font-semibold  rounded  bg-slate-600 transition  hover:bg-slate-500  text-white"
                >
                  Add Recomendation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CardDitails;
