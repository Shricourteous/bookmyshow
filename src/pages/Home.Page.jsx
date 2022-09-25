
import React, {useState} from 'react'
import DefaultLayoutHOC from '../layouts/Default.layout';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCorousal/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [recommenderMovies, setRecomenderMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(()=>{
    const requestPopularMovies = async()=>{
      const getPopularMovies = await axios.get('/movie/popular');
      setRecomenderMovies(getPopularMovies.data.results)
    }
    requestPopularMovies();
  },[])

  useEffect(()=>{
    const requestTopRatedMovies = async()=>{
      const getTopRatedMovies = await axios.get('/movie/top_rated');
      setPremierMovies(getTopRatedMovies.data.results)
    }
    requestTopRatedMovies();
  },[])

  useEffect(()=>{
    const requestUpcommingMovies = async()=>{
      const getUpcommingMovies = await axios.get('/movie/upcoming');
      setOnlineStreamEvents(getUpcommingMovies.data.results)
    }
    requestUpcommingMovies();
  },[])

  return (
    <> 
    <HeroCarousel/>
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <h1 className='text-2xl font-bold text-gray-800 sm:ml-0 my-3'>
        The Best Of Entertainment
      </h1>
      <EntertainmentCardSlider/>
    </div>
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
        title = "Recomended Movies"
        subtitle = "List Of Recomended Movies"
        posters = {recommenderMovies}
        isDark = {false}
      
      />
    </div>

    <div className='bg-premier-800 py-12'>
      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <div className='hidden md:flex'>
          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className='w-full h-full' />
        </div>
        <PosterSlider
          title="Premiers"
          subtitle = "Brand New releases every friday"
          posters = {premierMovies}
          isDark = {true}
        />
      </div>
    </div>
    <div className='container mx-auto px-4 md:px-12 my-8'>
    <PosterSlider
          title="Online Streaming event"
          subtitle = ""
          posters = {onlineStreamEvents}
          isDark = {false}
        />
    </div>

    </>  
  )
}

export default DefaultLayoutHOC(HomePage);