import React from 'react'
import PlayFilters from '../components/PlayFilter/PlayFilters.component';
import DefaultLayoutHOC from '../layouts/Default.layout';
import Poster from '../components/Poster/Poster.Component';


const PlayPage = () => {
  return (
    <>
      <div className='container mx-auto px-4¡ my-10'>
        <div className='w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-slate-400 rounded'>
            <h2 className='text-2xl font-bold mb-4'>Play in CBE TamilNadu</h2>
            <div className='flex flex-wrap '>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>
              Filters
            </h2>
            <div>
              <PlayFilters title="Date" tags={["Today","Tomorrow", "This weekend"]}/>
            </div>
            <div>
              <PlayFilters title="Language" tags={["Tamil","Hindi", "Russian"]}/>
            </div>

          </div>
        </div>
        <iframe title='Play Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.868121193647!2d76.91399302667243!3d11.041098774275035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858b6c24ba54d%3A0x84e6712fe7fc5069!2sEdayarpalayam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1664239210095!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFulScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}

export default DefaultLayoutHOC (PlayPage);