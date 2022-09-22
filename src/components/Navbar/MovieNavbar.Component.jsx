import React, {useContext} from 'react'
import {BiChevronDown, BiMenu, BiSearch, BiShareAlt} from 'react-icons/bi'
import { MovieContext } from '../../context/Movie.Context'


const NavSm = ()=>{
  const {movie} = useContext(MovieContext);

  return(
    <>
    <div className='text-gray-700 flex items-center justify-between'>
      <div>
        <h3 className='text-xl font-bold'>{movie.original_title}</h3>
      </div>
      <div className='w-8 h-8'>
        <BiShareAlt className='w-full h-full'/>
      </div>
    </div>
    </>
  );
}

const NavLg = () =>{
  return(
    <>
      <div className='container flex mx-auto px-4 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <div className='w-10 h-10'>
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="Logo" className='w-full h-full' />
          </div>
          <div className='w-full flex item-center gap-3 bg-white px-3 py-1 rounded-md'>
          <BiSearch/>
          <input type="search" className='w-full bg-transparent border-none focus:outline-none' placeholder='Search for movies, Plays, events, and activities'/> 
          </div>
        </div>
        <div className='flex item-center gap-3'>
          <span className='flex text-gray-200 text-base items-center cursor-pointer'>TN CBE <BiChevronDown/></span>
          <button className='bg-red-600 text-white px-2 text-sm rounded'>Sign In</button>
          <div className='w-8 h-8 text-white'>
            <BiMenu className='w-full h-full' />
          </div>
        </div>      
      </div>
    </>
  )
}


const MovieNavbar = () => {
  return (
    <>
      <nav className='bg-white border-b-2 lg:bg-darkBackground-700 p-4'>
        <div className='lg:hidden'>
          {/* Mobile & medium Screen  */}
          <NavSm/>
        </div>
        <div className='hidden w-full lg:flex'>
          {/* Larger Screen  */}
          <NavLg/>
        </div>
      </nav>
    </>
  )
}

export default MovieNavbar;