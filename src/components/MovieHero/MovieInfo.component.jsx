import React from 'react'
import { useContext } from 'react';
import { MovieContext } from '../../context/Movie.Context';
import PaymentModel from '../PaymentModel/PaymentModel.Component';
const MovieInfo = ({movie}) => {
  const genres = movie.genres?.map(({name})=>name).join(", ");
  const {price, isOpen,setIsOpen, rentMovie, buyMovie } = useContext(MovieContext);

    return (
    <>
    <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className='flex flex-col gap-8 px-4 my-3'>
          <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
          <div className='flex flex-col gap-2 text-white'>
            <h4>4K rating</h4>
            <h4>English, Hindi, Kanada, Tamil, Telugu</h4>
            <h4>{movie.runtime} min | {genres}</h4>
          </div>
          <div className='flex items-center gap-3 w-full'>
          <button onClick={rentMovie} className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>
            Rent ₹149
          </button>
          <button onClick={buyMovie} className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
            Buy ₹449
          </button>
        </div>
        </div>
    </>
  )
}

export default MovieInfo;