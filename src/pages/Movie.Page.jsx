import React from 'react'
import MoviesLayoutHOC from '../layouts/Movies.layout';
import { useParams } from 'react-router-dom';
import { useEffect,useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { MovieContext } from '../context/Movie.Context';
import Slider from 'react-slick';
import {FaCcVisa, FaApplePay} from 'react-icons/fa'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';
import Cast from '../components/Cast/Cast.Component';
const MoviePage = () => {
  const {id} = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimlarMovies] = useState([]);
  const [recommenderMovies, setRecommendedMovies] = useState([]);
  const {movie, setMovie} = useContext(MovieContext);

  useEffect(()=>{
    const requestCast = async ()=>{
      const getCast = await axios.get(`movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  },[id]);

  useEffect(()=>{
    const requestSimlarMovies = async ()=>{
      const getSimlarMovies = await axios.get(`movie/${id}/similar`);
      setSimlarMovies(getSimlarMovies.data.results);
    };
    requestSimlarMovies();
  },[id]);

  useEffect(()=>{
    const requestRecommendedMovies = async ()=>{
      const getRecommendedMovies = await axios.get(`movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  },[id]);


  useEffect(() => {
    const requestMovie = async() =>{
      const getMovieData = await axios.get(`movie/${id}`);
      setMovie(getMovieData.data);

    }
    requestMovie();
  }, [id])
  




  const settingCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    infinte:false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:3,
    initialSlide:0,
    response: [{
      breakpoint:1024,
      settings:{
        slidesToShow:3,
        slidesToScroll:2,
      }
    },
    {
      breakpoint:600,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
      },
    },
      {
        breakpoint:480,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
        }
      }
  ]
  };
  return (
    <>

    <MovieHero/>
    <div className='my-12 container px-4 lg:ml-20 lg:w-2/3'>
      <div className='flex flex-col item-start gap-3'>
        <h1 className='text-gray-800 font-bold text-2xl'>
          About the movie
        </h1>
        <p>{movie.overview}</p>
      </div>
      <div className='my-8'>
        <hr />
      </div>
      <div className='my-8'>
        <h2 className='text-gray-800 font-bold text-2xl mb-3'>
          Applicable Offers 
        </h2>
        <div className='flex flex-col gap-3 lg:flex-row lg:w-3/4'>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcVisa className='w-full h-full' />
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>
                Visa Stream Offer
              </h3>
              <p className='text-gray-600 '>Get 50% off upto INR 150 on all RuPay cards* on Book My Show.</p>
            </div>
          </div>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaApplePay className='w-full h-full' />
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>
                Film Pass
              </h3>
              <p className='text-gray-600 '>Get 50% off upto INR 150 on all RuPay cards* on Book My Show.</p>
            </div>
          </div>
        </div>

      </div>
      
      
      <div className='my-8'>
        <hr />
      </div>

      {/* Cast ANd Crew */}
      <div className='my-8'>
        <h2 className='text-gray-800 font-bold text-2xl mb-4'>
          Cast And Crew
        </h2>
        <Slider {...settingCast}>
          {cast.map((castData)=>(
            <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}/>
          ))}
        </Slider>
      </div>


      <div className='my-8'>
        <hr />
      </div>

      {/* Recommended Moview Slider */}

      <div className='my-8 '>
        <PosterSlider 
        config = {settings} 
        title = "Recommended Movies" 
        posters = {recommenderMovies} 
        isDark = {false}/>
      </div>

      <div className='my-8'>
        <hr />
      </div>

      {/* Recommended Movies  */}
      <div className='my-8 '>
        <PosterSlider 
        config = {settings} 
        title = "BMS XCLUSIVE" 
        posters = {recommenderMovies} 
        isDark = {false}/>
      </div>

    </div>
    </>
  ) 
}
// Movie Page Export
export default MoviesLayoutHOC (MoviePage);