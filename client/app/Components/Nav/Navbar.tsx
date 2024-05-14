'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const buttons = [
    ['Home', ''],
    ['Events', 'Events'],
    ['Animals', 'Animals'],
    ['Students', 'Students'],
    ['Newsletter', 'Newsletter'],
  ];

  const listItems = buttons.map((button) => (
    <div
      key={button[0]}
      className='group transition-all duration-300 ease-in-out'
    >
      <Link
        href={'/' + button[1]}
        className='text-white lg:text-base md:text-sm sm:text-xs text-[0.5rem] lg:px-3 md:px-2 px-1 lg:py-2 py-1 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer'
      >
        {button[0]}
      </Link>
    </div>
  ));

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='flex w-4/5 '>
        <div className='bg-wm-orange px-4 w-full'>
          <div className='flex items-center justify-between lg:h-16 md:h-12 sm:h-12 h-10 pr-4'>
            <Link href='/'>
              <Image
                className='w-auto lg:h-[2.5rem] md:h-[1.875rem] sm:h-[1.25rem] h-4'
                src='/vercel.svg'
                alt='Your Logo'
                height={100}
                width={200}
              />
            </Link>
            <div className={isOpen ? 'flex' : ' hidden md:flex'}>
              <ul className='flex absolute bg-wm-orange md:relative flex-col md:flex-row w-4/5 shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex bg-transparent text-white'>
                {listItems}
              </ul>
            </div>
            <div className='md:hidden'>
              <button
                className='flex justify-center items-center '
                onClick={toggleNavbar}
              >
                <svg
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  stroke='currentColor'
                  stroke-width='2'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className={isOpen ? 'hidden' : 'flex'}
                >
                  <line x1='3' y1='12' x2='21' y2='12'></line>
                  <line x1='3' y1='6' x2='21' y2='6'></line>
                  <line x1='3' y1='18' x2='21' y2='18'></line>
                </svg>
                <svg
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  stroke='currentColor'
                  stroke-width='2'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className={isOpen ? 'flex' : 'hidden'}
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='w-0 h-0 br lg:border-t-[32px] border-t-[1.5rem] border-t-transparent lg:border-l-[50px] md:border-l-[40px] sm:border-l-[30px] border-l-[20px] border-l-wm-orange lg:border-b-[32px] border-b-[1.5rem] border-b-transparent'></div>
      </nav>
    </div>
  );
};

export default Navbar;
