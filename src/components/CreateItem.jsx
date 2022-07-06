import React from 'react';
import { motion } from 'framer-motion';
import { MdFastfood } from 'react-icons/md';
const CreateItem = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <div
        className='w-[90%] 
      md:w-[75%] rounded-lg 
      border  
      border-gray-200 p-4
      flex flex-col
      items-center justify-center'
      >
        <motion.p
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='w-full p-2 rounded-lg text-center bg-rose-500 text-red-800 '
        >
          Something went wrong!
        </motion.p>
        <div className='w-full py-2 border-b border-gray-300 gap-2 flex items-center'>
          <MdFastfood />{' '}
          <input
            type='text'
            className='w-full h-full outline-none  placeholder:text-gray-500 text-lg font-semibold bg-transparent'
            required
            placeholder='Food Title'
          />
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
