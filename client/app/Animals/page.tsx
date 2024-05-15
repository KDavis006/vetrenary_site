import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';

const Animals = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Opening background image (Probably not the proper way to do this but it wasnt working before) */}
      <Image
        src='/campus.jpg'
        alt='background Image'
        width={1000}
        height={1000}
        className='w-screen h-screen absolute -z-10 top-0 left-0'
      />

      {/* Opening to the page (Header) */}
      <div className='flex w-screen lg:w-1/2 justify-center items-center h-[80vh]'>
        <div className='flex flex-col justify-evenly items-center h-3/5 w-4/5 md:w-3/4 lg:w-2/3 py-12 px-4 bg-wm-orange rounded-[15px]'>
          <div className='text-4xl text-center mb-5'>
            To Adopt Please Make an Account
          </div>
          <div className='text-center text-wrap text-base sm:text-lg md:text-xl lg:text-2xl underline'>
            <Link href='/Signup'>Create an Account →</Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-evenly bg-white mt-[4.375rem] pb-[4.375rem]'>
        <input
          type='text'
          className='border-wm-orange border-4 rounded-full w-4/5 h-[40px]'
        />
        <div className='flex flex-row justify-evenly'>
          <div>
            <div className='hs-dropdown relative inline-flex'>
              <button
                id='hs-dropdown-default'
                type='button'
                className='hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'
              >
                Actions
                <svg
                  className='hs-dropdown-open:rotate-180 size-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </button>

              <div
                className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full'
                aria-labelledby='hs-dropdown-default'
              >
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
                  href='#'
                >
                  Newsletter
                </a>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
                  href='#'
                >
                  Purchases
                </a>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
                  href='#'
                >
                  Downloads
                </a>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
                  href='#'
                >
                  Team Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;
