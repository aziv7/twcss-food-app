import React from 'react';

import { IoFastFoodOutline } from 'react-icons/io5';

const CategoriesContainer = () => {
  return (
    <section className='w-full py-6 mx-4'>
      <div className='w-full flex flex-col items-center justify-center'>
        {' '}
        <p
          className='text-3xl font-bold text-headingColor capitalize relative
before:absolute before:rounded-lg before:content
before:w-20 before:h-1 before:-bottom-2
before:left-0 before:bg-orange-500 transition-all ease-in-out  
duration-150


'
        >
          Hot dishes
        </p>
        <div className=' w-full  flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
          <div className='group bg-orange-100  active:ring-4 active:ring-red-500 hover:bg-red-600 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-200 transition-all ease-out'>
            <div className='w-10 h-10 rounded-full bg-red-600 group-hover:bg-red-200 flex items-center justify-center'>
              <IoFastFoodOutline className='text-white group-hover:text-gray-800 text-xl font-semibold' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesContainer;
