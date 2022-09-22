import React from 'react'
import { useState } from 'react';

const MovieInfo = ({movie}) => {
    const [isopen , setIsOpen] = useState(false)
    const [price , setPrice] = useState(false)
    const genres = movie.genres?.map(({name})=>name).join(", ");


    const rentMovie = ()=>{
        setIsOpen(true)
        setPrice(149)
    }

    const buyMovie = ()=>{
        setIsOpen(true);
        setPrice(449)
    }

    return (
    <>
    {/* <PaymentModel setIsOpen={setIsOpen} isopen={isopen} /> */}
        <div className='flex flex-col gap-8 px-4 my-3'>
          <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
          <div className='flex flex-col gap-2 text-white'>
            <h4>4K rating</h4>
            <h4>English, Hindi, Kanada, Tamil, Telugu</h4>
            <h4>{movie.runtime} min | {genres}</h4>
          </div>
          <div className='flex items-center gap-3 w-full'>
          <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>
            Rent ₹149
          </button>
          <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
            Buy ₹449
          </button>
        </div>
        </div>
    </>
  )
}

export default MovieInfo;