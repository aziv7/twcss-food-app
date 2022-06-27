import React from 'react';
import Logo from '../img/logo.png';
const Header = () => {
  return (
    <div className='fixed w-screen z-50  p-6 px-16  '>
      <div className='hidden md:flex w-full h-full justify-between'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-10 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>
        <div>
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
          </ul>
        </div>
      </div>
      <div className='flex md:hidden w-full h-full '></div>
    </div>
  );
};

export default Header;
