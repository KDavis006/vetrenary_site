import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Nav/Navbar';

const Events = () => {
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
      <div className='flex justify-center items-center h-[80vh] py-12'>
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&bgcolor=%23ffffff&showTitle=0&showPrint=0&src=a2RhdmlzMDA2QHdlc3QtbWVjLm9yZw&color=%23039BE5'
          className='border-solid-[1px]-[#777] w-4/5 sm:w-3/5 h-full'
        ></iframe>
      </div>
    </div>
  );
};

export default Events;
