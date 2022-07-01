import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
  return (
    <div className='fixed w-screen z-50  p-6 px-16  '>
      <div className='hidden md:flex w-full h-full justify-between'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-10 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8 '>
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
          </ul>{' '}
          <div className='relative '>
            <FaShoppingCart className='text-textColor text-3xl cursor-pointer'></FaShoppingCart>
            <div className='w-5 h-5 rounded-full text-sm bg-cartNumBg  absolute font-semibold  -right-3 -top-2 text-white text-center'>
              3
            </div>{' '}
          </div>
          <img
            loading='lazy'
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl'
            src={Avatar}
            alt='user profile picture'
          />
        </div>
      </div>
      <div className='flex md:hidden w-full h-full '></div>
    </div>
  );
};

export default Header;