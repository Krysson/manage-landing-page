'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (email.length > 0) {
      const isValidEmail = validateEmail(email);
      setIsValid(isValidEmail);
      setError(isValidEmail ? '' : 'Please enter a valid email address (e.g., name@example.com)');
    } else {
      setIsValid(false);
      setError('');
    }
  }, [email]);

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      console.log('Form submitted with email:', email);
      // Here you would typically send the email to your server
    } else {
      setError('Please enter a valid email address before submitting.');
    }
  };

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
          <div className='flex justify-center space-x-4 '>
            {/* <!-- Link 1 --> */}
            <a href='#'>
              <Image
                src='/images/icon-facebook.svg'
                alt=''
                className='hover:bg-brightRed '
                width={32}
                height={8}
              />
            </a>
            {/* <!-- Link 2 --> */}
            <a href='#'>
              <Image
                src='/images/icon-youtube.svg'
                alt=''
                className='h-8 hover:bg-brightRed'
                width={32}
                height={8}
              />
            </a>
            {/* <!-- Link 3 --> */}
            <a href='#'>
              <Image
                src='/images/icon-twitter.svg'
                alt=''
                className='hover:bg-brightRed'
                width={36}
                height={8}
              />
            </a>
            {/* <!-- Link 4 --> */}
            <a href='#'>
              <Image
                src='/images/icon-pinterest.svg'
                alt=''
                className='hover:bg-brightRed'
                width={32}
                height={8}
              />
            </a>
            {/* <!-- Link 5 --> */}
            <a href='#'>
              <Image
                src='/images/icon-instagram.svg'
                alt=''
                className='hover:bg-brightRed'
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
          <form
            onSubmit={handleSubmit}
            noValidate>
            <div className='flex flex-col space-y-2'>
              <div className='flex space-x-3'>
                <input
                  type='email'
                  className={`flex-1 px-4 rounded-full focus:outline-none text-brightRed ${
                    email.length > 0 ? (isValid ? 'border-green-500' : 'border-red-500') : ''
                  }`}
                  placeholder='Updated in your inbox'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                  required
                />
                <button
                  type='submit'
                  className={`px-6 py-2 text-white rounded-full ${
                    isValid
                      ? 'bg-brightRed hover:bg-brightRedLight'
                      : 'bg-brightRedLight cursor-not-allowed'
                  } focus:outline-none`}
                  disabled={!isValid}>
                  Go
                </button>
              </div>
              {error && <p className='text-brightRed font-light text-xs'>{error}</p>}
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
