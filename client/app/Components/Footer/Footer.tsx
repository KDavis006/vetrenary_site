import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[35vh] bg-wm-orange flex flex-row justify-evenly items-center'>
        <Image src='/vercel.svg' alt='Your Logo' height={100} width={200} />
        <div className='bg-white h-3/4 w-1'></div>
        <div className='flex flex-col justify-evenly h-4/5'>
          <div className='text-center underline'>
            <Link href='/'>Home</Link>
          </div>
          <div className='text-center underline'>
            <Link href='/Events'>Events</Link>
          </div>
          <div className='text-center underline'>
            <Link href='/Animals'>Animals</Link>
          </div>
          <div className='text-center underline'>
            <Link href='/Newsletter'>Newletter</Link>
          </div>
          <div className='text-center underline'>
            <Link href='/Students'>Students</Link>
          </div>
          <div className='text-center underline'>
            <Link href='/Login'>Login</Link>
          </div>
          <div className='text-center underline'>
            <Link href='/Signup'>Signup</Link>
          </div>
        </div>
        <div className='bg-white h-3/4 w-1'></div>
        <div className='flex flex-col justify-evenly h-4/5'>
          <div>1617 W Williams Dr, Phoenix, AZ 85027</div>
          <div>555 - 555 - 5555</div>
          <div>jhondoe@west-mec.org</div>
        </div>
        <div className='bg-white h-3/4 w-1'></div>
        <div className='flex flex-col justify-evenly h-5/6'>
          <div className='text-center'>@Vetrenary</div>
          <Image src='/vercel.svg' alt='Your Logo' height={100} width={200} />
          <Image src='/vercel.svg' alt='Your Logo' height={100} width={200} />
          <Image src='/vercel.svg' alt='Your Logo' height={100} width={200} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
