import React from 'react'

const CastComponent = (props) => {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-32 h-32'>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="Cast ANd Crew Members" className='w-full h-full rounded-full object-center object-cover'/>
        </div>
        <h1 className='text-xl text-gray-800'>{props.castName}</h1>
        <h1 className='text-xl text-gray-500'>as {props.role}</h1>
    </div>
  )
}

export default CastComponent;