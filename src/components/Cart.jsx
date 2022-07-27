import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';

import { RiRefreshFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';

const Cart = ({ setShowCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className='fixed z-50 top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col'>
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <motion.div
          onClick={() => setShowCart(false)}
          whileTap={{ scale: 0.75 }}>
          {' '}
          <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md 
          hover:shadow-md cursor-pointer text-textColor text-base'>
          Clear <RiRefreshFill />{' '}
        </motion.p>
      </div>

      <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
          <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
            <img
              className='w-40 h-40   rounded-full object-contain'
              src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <div className='flex flex-col gap-2'>
              <p className='text-base text-gray-50'>sandwich kebab</p>
              <p className='text-sm block text-gray-300 font-semibold'>
                11$
              </p>{' '}
            </div>

            <div className='group text-white flex items-center gap-2 ml-auto cursor-pointer'>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus />{' '}
              </motion.div>
              <p className=' flex items-center gap-2 p-1 bg-cartBg px-2 my-2  rounded-md hover:shadow-md cursor-pointer text-white text-base'>
                3
              </p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus />{' '}
              </motion.div>
            </div>
          </div>
        </div>
        <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-lg'>Sub Total</p>
            <p className='text-gray-400 text-lg'>20$</p>
          </div>

          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-lg'>Delivery</p>
            <p className='text-gray-400 text-lg'>2$</p>
          </div>
          <div className='w-full border-b border-gray-600 my-2'></div>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-xl font-semibold'>Total</p>
            <p className='text-gray-400 text-xl font-semibold'>22$</p>
          </div>

          <motion.button className='w-full p-2 rounded-full bg-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-200 ease-in-out'>
            Check out
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
