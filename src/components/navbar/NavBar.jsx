'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const btn = document.getElementById('menu-btn');
  //   const nav = document.getElementById('menu');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  //   btn.addEventListener('click', handleMenuToggle);

  //   return () => {
  //     btn.removeEventListener('click', handleMenuToggle);
  //   };
  // }, [menuOpen]);

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className='relative container mx-auto p-6'>
        {/* <!-- Flex container --> */}
        <div className='flex items-center justify-between'>
          {/* <!-- Logo --> */}
          <div className='pt-2'>
            <Image
              src='/images/logo.svg'
              alt='This is the Mange Logo'
              width={250}
              height={50}
            />
          </div>
          {/* <!-- Menu Items --> */}
          <div className='hidden space-x-6 md:flex'>
            <a
              href='#'
              className='hover:text-darkGrayishBlue'>
              Pricing
            </a>
            <a
              href='#'
              className='hover:text-darkGrayishBlue'>
              Product
            </a>
            <a
              href='#'
              className='hover:text-darkGrayishBlue'>
              About Us
            </a>
            <a
              href='#'
              className='hover:text-darkGrayishBlue'>
              Careers
            </a>
            <a
              href='#'
              className='hover:text-darkGrayishBlue'>
              Community
            </a>
          </div>
          {/* <!-- Button --> */}
          <a
            href='#'
            className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'>
            Get Started
          </a>
          {/* <!-- Hamburger Button --> */}

          {/* <!-- Hamburger Icon / Button --> */}
          <button
            id='menu-btn'
            className={`block hamburger md:hidden focus:outline-none ${menuOpen ? 'open' : ''}`}
            onClick={handleMenuToggle}>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>

        {/* <!-- Menu --> */}
        <div
          id='menu'
          className={`md:hidden absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            menuOpen ? 'flex' : 'hidden'
          }`}>
          {/* <!-- Mobile Menu Items --> */}
          <a href='#'>Pricing</a>
          <a href='#'>Product</a>
          <a href='#'>About Us</a>
          <a href='#'>Careers</a>
          <a href='#'>Community</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
