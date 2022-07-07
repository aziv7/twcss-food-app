import React, { useEffect, useRef } from 'react';
import I6 from '../img/i6.png';
import { motion } from 'framer-motion';
import { TbShoppingCartPlus } from 'react-icons/tb';

const RowContainer = ({ scroll }) => {
  const flag = true;
  const refff = useRef();

  useEffect(() => {
    refff.current.scrollLeft += scroll;
  }, [scroll]);

  return (
    <div
      ref={refff}
      className={`w-full my-12 gap-3 flex items-center
   ${
     flag
       ? 'overflow-x-scroll scroll-smooth scrollbar-none'
       : 'overflow-x-hidden'
   }`}
    >
      <div
        className='w-275 min-w-[275px] my-12 md:w-340 md:min-w-[300px] h-[175px] md:h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl flex flex-col items-center justify-between'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>

      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-gray-100  bg-gray-50 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-300 my-12 md:w-340 min-w-350 h-auto rounded-lg p-2 hover:bg-blue-50  bg-gray-100 shadow-md backdrop-blur-md
      hover:drop-shadow-xl'
      >
        <div className='w-full flex items-center justify-between'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={I6}
            alt=''
            className='w-44 -mt-8 drop-shadow-xl '
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex justify-center items-center'
          >
            <TbShoppingCartPlus className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base md:text-lg'>
            Chocolate & Vanilla
          </p>
          <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-textColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
