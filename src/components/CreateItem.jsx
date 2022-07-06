import React from 'react';
import { motion } from 'framer-motion';
import { MdFastfood } from 'react-icons/md';
import Loader from './Loader';
const CreateItem = () => {
  const categories = ['Fast Food', 'Fruit', 'Pizza'];
  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <div
        className='w-[90%] 
      md:w-[75%] rounded-lg 
      border  
      border-gray-200 p-4
      flex flex-col
      items-center justify-center gap-4'
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

        <div className='w-full'>
          <select
            name=''
            className='outline-none w-full text-base rounded-md cursor-pointer p-2 border-b-2'
            id=''
          >
            <option value='other' className='p-2 bg-white'>
              Select Category
            </option>
            {categories.map((c) => (
              <option
                value={c}
                className='bg-white p-2 text-base border-0 outline-none caret-pink-50 text-headingColor'
              >
                {c}
              </option>
            ))}
          </select>
        </div>
        <div
          className='group flex justify-center items-center
        flex-col border-2 border-dashed border-gray-600 w-full
        h-255 md:h-420 cursor-pointer rounded-lg'
        >
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
