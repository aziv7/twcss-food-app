import React from 'react';
import { motion } from 'framer-motion';

import { BiCategoryAlt } from 'react-icons/bi';
import { MdPriceChange } from 'react-icons/md';

import { BsCloudUploadFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

import { MdFastfood } from 'react-icons/md';
import Loader from './Loader';
const CreateItem = () => {
  const img = null;
  const categories = ['Fast Food', 'Fruit', 'Pizza'];
  const loading = false;
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
          <MdFastfood className='text-2xl text-gray-600' />{' '}
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
          {loading == true ? (
            <Loader />
          ) : img != null ? (
            <>
              <div className='relative h-full'>
                <img
                  className='w-full h-full object-cover'
                  src=''
                  alt='uploaded picture'
                />

                <button
                  type='button'
                  className='absolute
bottom-3 right-3 p-3 rounded-full
bg-red-500 text-xl cursor-pointer transition-all 
ease-in-out
'
                >
                  <TiDelete className='text-white' />
                </button>
              </div>
            </>
          ) : (
            <>
              <label
                htmlFor=''
                className='
w-full h-full flex flex-col items-center justify-center cursor-pointer'
              >
                <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                  <BsCloudUploadFill className='text-4xl text-gray-500 group-hover:text-gray-700' />
                  <p className='text-gray-500 group-hover:text-gray-700'>
                    Click here to upload
                  </p>
                </div>
                <input className='hidden' type='file' />
              </label>
            </>
          )}
        </div>
        <div
          className='w-full flex flex-col
        md:flex-row items-center gap-3'
        >
          <div
            className='w-full py-2 border-b border-gray-300
flex items-center gap-2'
          >
            <BiCategoryAlt className='text-2xl text-gray-600' />
            <input
              type='text'
              className='w-full h-full outline-none  placeholder:text-gray-500 text-lg font-semibold bg-transparent'
              required
              placeholder='Category'
            />
          </div>

          <div
            className='w-full py-2 border-b border-gray-300
flex items-center gap-2'
          >
            <MdPriceChange className='text-2xl text-gray-600' />
            <input
              type='text'
              className='w-full h-full outline-none  placeholder:text-gray-500 text-lg font-semibold bg-transparent'
              required
              placeholder='Price'
            />
          </div>
        </div>
        <div className='flex items-center w-full'>
          <button
            className='ml-0 md:ml-auto w-full md:w-auto
border-none outline-none bg-green-400 px-12 py-2 transition-all ease-in-out duration-200 hover:bg-green-700 rounded-lg text-lg text-white font-semibold'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
