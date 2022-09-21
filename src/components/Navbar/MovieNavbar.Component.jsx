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
    </div>
    <div className='w-8 h-8'>
      <BiShareAlt className='w-full h-full'/>
    </div>
    </>
  );
}

const NavLg = () =>{
  return(
    <>
    <div>
      
    </div>
    </>
  )
}


const MovieNavbar = () => {
  const {movie} = useContext(MovieContext);
  
  return (
    <>

    </>
  )
}

export default MovieNavbar;