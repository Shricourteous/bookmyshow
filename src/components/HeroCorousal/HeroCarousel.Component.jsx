import React,{useState} from 'react';
import HeroSlider from "react-slick";

const HeroCarousel = () => {

  const [images, setImages] = useState([]);
  return (
  <>
    <div className='lg:hidden'>
      <HeroCarousel>
        {
          images.map((image)=>(
            <div className="w-full h-56 md:h-80 py-3">
              <img src ="" alt="Hero Bannner" className="w-full rounded-md object-cover" />
            </div>
          ))
        }
      </HeroCarousel>
    </div>
    <div className='hidden lg:block'></div>
  
  </>
  
  );

}

export default HeroCarousel;