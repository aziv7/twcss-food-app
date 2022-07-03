import React, { useState } from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import { MdLogout } from 'react-icons/md';

import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Header = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const goTo = () => {
    setDropdown(false);

    navigate('/new-item');
  };

  return (
    <div className='fixed w-screen z-50 p-3 px-4  md:p-6 md:px-16  '>
      <div className='hidden md:flex w-full h-full justify-between'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            <img src={Logo} alt='logo' className='w-10 object-cover' />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8 '
          >
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Home
            </li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Menu
            </li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              About us
            </li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Service
            </li>
          </motion.ul>{' '}
          <div className='relative group '>
            <FaShoppingCart className='text-textColor text-3xl cursor-pointer'></FaShoppingCart>
            <div className='transition-all duration-300 group-hover:scale-110 w-5 h-5 rounded-full text-sm bg-cartNumBg  absolute font-semibold  -right-3 -top-2 text-white text-center'>
              3
            </div>
          </div>
          <div className='relative' onClick={() => setDropdown(!dropdown)}>
            {' '}
            <motion.img
              whileTap={{ scale: 0.6 }}
              loading='lazy'
              className='rounded-full w-10 cursor-pointer min-w-[40px] h-10 min-h-[40px] drop-shadow-xl'
              src={Avatar}
              alt='user profile picture'
            />
            {dropdown === true && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col px-4 py-2 right-0 top-12'
              >
                <p
                  onClick={goTo}
                  className='px-4 py-2 rounded-lg cursor-pointer gap-3 flex items-center hover:bg-slate-200 transition-all duration-150 ease-in-out text-textColor text-sm '
                >
                  <MdAddShoppingCart /> New Item
                </p>

                <p className='px-4 py-2 rounded-lg cursor-pointer gap-3 flex items-center hover:bg-slate-200 transition-all duration-150 ease-in-out text-textColor text-sm'>
                  <MdLogout /> Logout
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between md:hidden w-full h-full '>
        <div className='relative group '>
          <FaShoppingCart className='text-textColor text-3xl cursor-pointer'></FaShoppingCart>
          <div className='transition-all duration-300 group-hover:scale-110 w-5 h-5 rounded-full text-sm bg-cartNumBg  absolute font-semibold  -right-3 -top-2 text-white text-center'>
            3
          </div>
        </div>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            <img src={Logo} alt='logo' className='w-10 object-cover' />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>
        </Link>
        <div className='relative' onClick={() => setDropdown(!dropdown)}>
          {' '}
          <motion.img
            whileTap={{ scale: 0.6 }}
            loading='lazy'
            className='rounded-full w-10 cursor-pointer min-w-[40px] h-10 min-h-[40px] drop-shadow-xl'
            src={Avatar}
            alt='user profile picture'
          />
          {dropdown === true && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col px-4 py-2 right-0 top-12'
            >
              <p
                onClick={goTo}
                className='px-4 py-2 rounded-lg cursor-pointer gap-3 flex items-center hover:bg-slate-200 transition-all duration-150 ease-in-out text-textColor text-sm '
              >
                <MdAddShoppingCart /> New Item
              </p>

              <ul className='px-4 py-2 flex  flex-col items-center  '>
                <li className=' px-10 rounded-lg py-1 text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-200 transition-all ease-in-out cursor-pointer'>
                  Home
                </li>
                <li className='px-10 rounded-lg py-1   text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-200 transition-all ease-in-out cursor-pointer'>
                  Menu
                </li>
                <li className='px-4 rounded-lg py-1  text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-200 transition-all ease-in-out cursor-pointer'>
                  About us
                </li>
                <li className='px-10 rounded-lg py-1   text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-200 transition-all ease-in-out cursor-pointer'>
                  Service
                </li>
              </ul>

              <p className='px-4 py-2 rounded-lg cursor-pointer gap-3 flex items-center hover:bg-slate-200 transition-all duration-150 ease-in-out text-textColor text-sm'>
                <MdLogout /> Logout
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
