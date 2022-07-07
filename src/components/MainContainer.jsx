import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HomeContainer from './HomeContainer';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import RowContainer from './RowContainer';

const MainContainer = () => {
  const [scroll, setScroll] = useState(0);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <section className='w-full py-6'>
        <div className='w-full flex items-center justify-between'>
          <p
            className='text-3xl font-bold text-headingColor capitalize relative
before:absolute before:rounded-lg before:content
before:w-20 before:h-1 before:-bottom-2
before:left-0 before:bg-orange-500 transition-all ease-in-out  
duration-150


'
          >
            Fresh & healthy
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div
              onClick={() => setScroll(scroll - 200)}
              whileTap={{ scale: 0.6 }}
              className='hover:shadow-lg w-8 h-8 rounded-lg cursor-pointer transition-all duration-150 ease-in-out bg-orange-400 hover:bg-orange-500 flex items-center justify-center'
            >
              <IoIosArrowBack className='text-lg text-white' />
            </motion.div>

            <motion.div
              onClick={() => setScroll(scroll + 200)}
              whileTap={{ scale: 0.6 }}
              className='hover:shadow-lg w-8 h-8 rounded-lg transition-all duration-150 ease-in-out  cursor-pointer bg-orange-400 hover:bg-orange-500 flex items-center justify-center'
            >
              <IoIosArrowForward className='text-lg text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer scroll={scroll} />
      </section>
    </div>
  );
};

export default MainContainer;
