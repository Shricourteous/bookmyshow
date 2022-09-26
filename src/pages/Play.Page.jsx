import React from 'react'
import PlayFilters from '../components/PlayFilter/PlayFilters.component';
import DefaultLayoutHOC from '../layouts/Default.layout';
import Poster from '../components/Poster/Poster.Component';


const PlayPage = () => {
  return (
    <>
      <div className='container mx-auto px-4¡ my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Play in NCR TamilNadu</h2>
            <div className='flex flex-wrap '>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster isPlay= {true} src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ara-gora-comedy-open-mic-nights-0-2022-9-11-t-10-17-18.jpg' title='Open Mic Nights' subtitle='Lets Talk..' />                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayoutHOC (PlayPage);