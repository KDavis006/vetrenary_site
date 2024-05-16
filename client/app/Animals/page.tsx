import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Nav/Navbar';
import Card from '../Components/Card/Card';
import Dropdown from '../Components/Dropdown/Dropdown';
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
      <div className='flex w-screen lg:w-1/2 justify-center items-center h-[90vh]'>
        <div className='flex flex-col justify-evenly items-center h-2/3 w-4/5 md:w-3/4 lg:w-2/3 py-12 px-4 bg-wm-orange rounded-[15px]'>
          <div className='text-4xl text-center mb-5'>
            To Adopt Please Make an Account
          </div>
          <div className='text-center text-wrap text-base sm:text-lg md:text-xl lg:text-2xl underline'>
            <Link href='/Signup'>Create an Account →</Link>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-evenly bg-white pb-[4.375rem] py-2'>
        <form className='max-w-sm mx-auto'>
          <select
            id='countries'
            className='bg-wm-orange rounded-full p-4 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>- Animals -</option>
            <option value='DG'>Dog</option>
            <option value='CT'>Cat</option>
            <option value='BR'>Birds</option>
            <option value='OT'>Other</option>
          </select>
        </form>

        <form className='max-w-sm mx-auto'>
          <select
            id='countries'
            className='bg-wm-orange rounded-full p-4 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>- Age -</option>
            <option value='Y'>{'<'} 1 year</option>
            <option value='O'>{'>'} 1 year</option>
          </select>
        </form>

        <form className='max-w-sm mx-auto'>
          <select
            id='countries'
            className='bg-wm-orange rounded-full p-4 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>- Gender -</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </form>

        <form className='max-w-sm mx-auto'>
          <select
            id='countries'
            className='bg-wm-orange rounded-full p-4 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>- Size -</option>
            <option value='SM'>Small</option>
            <option value='MD'>Medium</option>
            <option value='LG'>Large</option>
          </select>
        </form>
      </div>

      <div className='flex flex-row justify-evenly flex-wrap bg-white'>
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
        <Card
          imageUrl={'/campus.jpg'}
          name={'Bob'}
          age={'12 Years'}
          gender={'Male'}
        />
      </div>
    </div>
  );
};

export default Animals;
