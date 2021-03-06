import React from 'react';
import HeroBg from '../img/heroBg.png';

import Delivery from '../img/delivery.png';

import { data } from '../data';

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-full '>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='duration-500 transition-all cursor-pointer hover:-translate-y-3 flex items-center justify-center gap-2 bg-orange-200 px-4  py-1 rounded-full drop-shadow-xl'>
          <p className=' text-base text-orange-500 font-semibold'>
            Fast Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>
        <p className='text-[2rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]'>
          The Fastest Delivery in{' '}
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
            Your City
          </span>
        </p>
        <p className='text-center md:text-left text-base text-textColor lg:w-[80%]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          reprehenderit sequi pariatur id est molestias corporis distinctio
          deserunt saepe iure sint in atque maiores accusantium, perferendis
          veniam inventore? Quaerat, ad!
        </p>
        <button
          className='bg-gradient-to-br 
      from-orange-400 to-orange-600 
      w-full md:w-auto
      px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-150'
          type='button'
        >
          Order Now
        </button>
      </div>
      <div className='py-2 flex-1'>
        <div className='w-full flex items-center  relative'>
          <img
            src={HeroBg}
            className='h-420 w-full lg:w-auto lg:h-650 ml-auto'
            alt='hero-bg'
          />
          <div
            className='w-full gap-2
          flex flex-wrap h-full absolute overflow-y-hidden  items-center justify-center px-32 py-4 '
          >
            {data?.map((plate) => (
              <div
                key={plate.name}
                className=' w-190 min-w-[190px] p-4 ring-1 ring-gray-300 bg-cardColor backdrop-blur-md 
            rounded-3xl transition-all 
            transform 
            
            duration-300 
            ease-in-out 
            hover:shadow-md
            hover:-translate-y-7
            flex flex-col items-center justify-center'
              >
                <img
                  src={plate.imageSrc}
                  className='w-20  lg:w-40 -mt-10 lg:-mt-20'
                  alt={plate.name}
                />

                <p className='text-base lg:text-xl font-semibold text-textColor'>
                  {plate.name}
                </p>

                <p className='text-[12px] lg:text-sm text-gray-400 font-semibold'>
                  {plate.description}
                </p>
                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-sm text-green-400'>$</span>{' '}
                  {plate.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
