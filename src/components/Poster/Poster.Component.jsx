import React from 'react'
import { Link } from 'react-router-dom';

const PlayPoster = (props)=>{
  return(  
  <a href="https://in.bookmyshow.com/events/ara-gora-comedy-open-mic-nights/ET00339784" target='_blank'>
  <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
    <div className='h-40 md:h-80'>          
       <img src={props.src} alt="poster" className='w-full h-full rounded-md object-cover object-center'/>

    </div>
    <h3 className={`text-lg font-bold ${props.isDark ?"text-white" :"text-gray-700" }`}>
      {props.title}
    </h3>
  </div>
</a>
  );
};

const MoviePoster = (props)=>{
  return (
  <Link to={`/movie/${props.id}`}>
  <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
    <div className='h-40 md:h-80'>      
    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="poster" className='w-full h-full rounded-md'/>
    </div>
    <h3 className={`text-lg font-bold ${props.isDark ?"text-white" :"text-gray-700" }`}>
      {props.title}
    </h3>
  </div>
</Link>
  );
};


const Poster = (props) => {
  if(props.isPlay){
    return <PlayPoster {...props}/>
  }
  return <MoviePoster {...props}/>
}
export default Poster;