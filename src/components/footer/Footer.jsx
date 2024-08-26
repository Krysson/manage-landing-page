import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className='bg-veryDarkBlue'>
      {/* <!-- Flex Container --> */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* <!-- Logo and social links container --> */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <Image
              src='/images/logo-white.svg'
              alt='Logo in White'
              width={250}
              height={50}
            />
          </div>
          {/* <!-- Social Links Container --> */}
          <div className='flex justify-center space-x-4'>
            {/* <!-- Link 1 --> */}
            <a href='#'>
              <Image
                src='/images/icon-facebook.svg'
                alt=''
                className='h-8'
                width={32}
                height={8}
              />
            </a>
            {/* <!-- Link 2 --> */}
            <a href='#'>
              <Image
                src='/images/icon-youtube.svg'
                alt=''
                className='h-8'
                width={32}
                height={8}
              />
            </a>
            {/* <!-- Link 3 --> */}
            <a href='#'>
              <Image
                src='/images/icon-twitter.svg'
                alt=''
                className='h-8'
                width={36}
                height={8}
              />
            </a>
            {/* <!-- Link 4 --> */}
            <a href='#'>
              <Image
                src='/images/icon-pinterest.svg'
                alt=''
                className='h-8'
                width={32}
                height={8}
              />
            </a>
            {/* <!-- Link 5 --> */}
            <a href='#'>
              <Image
                src='/images/icon-instagram.svg'
                alt=''
                className='h-8'
                width={34}
                height={8}
              />
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <a
              href='#'
              className='hover:text-brightRed'>
              Home
            </a>
            <a
              href='#'
              className='hover:text-brightRed'>
              Pricing
            </a>
            <a
              href='#'
              className='hover:text-brightRed'>
              Products
            </a>
            <a
              href='#'
              className='hover:text-brightRed'>
              About
            </a>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <a
              href='#'
              className='hover:text-brightRed'>
              Careers
            </a>
            <a
              href='#'
              className='hover:text-brightRed'>
              Community
            </a>
            <a
              href='#'
              className='hover:text-brightRed'>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
      <div className='attribution gap-1 flex justify-center  text-xs text-white'>
        Challenge by{' '}
        <span className='pr-5'>
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'>
            Frontend Mentor
          </a>
          .{' '}
        </span>
        Coded by <a href='#'>Michael A. Gulla</a>.
      </div>
    </footer>
  );
};

export default Footer;
