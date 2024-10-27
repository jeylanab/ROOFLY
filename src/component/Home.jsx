import React from 'react';
import home from '../asset/home.mp4';
import searchIcon from "../asset/search-icon.svg"
import check from "../asset/check.svg"

export const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src={home} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-slate-300 opacity-60"></div> {/* Dark overlay */}
      <div className='relative z-10 flex items-start justify-around my-20 h-full'>
        <div >
          <h1 className='text-4xl font-bold'>Find the Perfect Property</h1>
          <p className='py-5 text-xl'>From cozy apartments to luxurious estates,<br /> we have something for everyone.</p>
          <div className='flex items-center my-10'>
            <input className=' px-10 text-slate-950 py-2 rounded-md' type="text" placeholder='Search here' />
            <div className='bg-gray-700 py-[10px] rounded-md px-2'>
              <img src={searchIcon} alt="search icon" />
            </div>
          </div>
          <div className='flex  py-2'>
              <div className='flex '>
                 <img src={check} alt="" />
                 <p>100% Guarantee</p>
               </div>
               <div className='flex px-3 '>
                <img src={check} alt="check icon" />
                <p>Expert Guidance</p>
               </div>
          </div>
            <div className='flex py-2 '>
              <div className='flex '>
                 <img src={check} alt="" />
                 <p>Client Satisfaction</p>
               </div>
               <div className='flex px-3 '>
                <img src={check} alt="check icon" />
                <p>Exclusive Listings</p>
               </div>
          </div>

        </div>
        <div>dfaljsk</div>
      </div>
      
    </div>
  );
}
