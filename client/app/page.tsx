import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';

export default function Home() {
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
      <div className='flex w-screen h-screen lg:w-1/2 justify-center items-center'>
        <div className='flex flex-col justify-evenly items-center h-1/2 w-4/5 md:w-3/4 lg:w-2/3 py-12 px-4 bg-wm-orange rounded-[15px]'>
          <div className='text-4xl font-bold text-center mb-5'>Welcome</div>
          <div className='text-center text-wrap'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            distinctio facilis reprehenderit doloremque eveniet tempora sint
            quibusdam, doloribus esse id hic voluptate voluptates? Tenetur rem
            modi vitae distinctio cum velit exercitationem aut, quos itaque
            impedit nisi! Facere voluptates tenetur, alias laborum expedita
            reiciendis aut, obcaecati quis maxime ad quos. Velit.
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className='bg-white pb-[4.375rem]'>
        {/* About the program */}
        <div>
          <div className='text-center text-[#5b6c81] text-6xl py-10'>
            Our Fabulous Program!
          </div>

          <div className='flex flex-col sm:flex-row justify-evenly items-center'>
            <div className='h-4/5 sm:w-1/4 w-4/5 my-3 sm:my-0'>
              <div className='bg-wm-orange p-5 rounded-lg'>
                <Image
                  src='/campus.jpg'
                  alt='background Image'
                  width={1000}
                  height={1000}
                  className='rounded-md'
                />
                <div className='text-center text-white text-2xl py-4'>
                  Learning
                </div>
                <div className='text-center text-wrap text-sm'>
                  Tenetur rem modi vitae distinctio cum velit exercitationem
                  aut, quos itaque impedit nisi! Facere voluptates tenetur,
                  alias laborum expedita reiciendis aut, obcaecati quis maxime
                  ad quos. Velit.
                </div>
              </div>
            </div>

            <div className='h-4/5 sm:w-1/4 w-4/5 my-3 sm:my-0'>
              <div className='bg-wm-orange p-5 rounded-lg'>
                <Image
                  src='/campus.jpg'
                  alt='background Image'
                  width={1000}
                  height={1000}
                  className='rounded-md'
                />
                <div className='text-center text-white text-2xl py-4'>
                  Growth
                </div>
                <div className='text-center text-wrap text-sm'>
                  Tenetur rem modi vitae distinctio cum velit exercitationem
                  aut, quos itaque impedit nisi! Facere voluptates tenetur,
                  alias laborum expedita reiciendis aut, obcaecati quis maxime
                  ad quos. Velit.
                </div>
              </div>
            </div>
            <div className='h-4/5 sm:w-1/4 w-4/5 my-3 sm:my-0'>
              <div className='bg-wm-orange p-5 rounded-lg'>
                <Image
                  src='/campus.jpg'
                  alt='background Image'
                  width={1000}
                  height={1000}
                  className='rounded-md'
                />
                <div className='text-center text-white text-2xl py-4'>
                  Action
                </div>
                <div className='text-center text-wrap text-sm'>
                  Tenetur rem modi vitae distinctio cum velit exercitationem
                  aut, quos itaque impedit nisi! Facere voluptates tenetur,
                  alias laborum expedita reiciendis aut, obcaecati quis maxime
                  ad quos. Velit.
                </div>
              </div>
            </div>
          </div>
          <div className='text-center py-5'>
            <Link
              href='/Newsletter'
              className='text-[#0c2340] underline text-3xl'
            >
              View Our Newsletter →
            </Link>
          </div>
        </div>

        {/* Students Area */}
        <div className='mt-32'>
          <div className='text-center text-[#0c2340] text-6xl py-10'>
            Meet Our Students
          </div>
          <div className='flex flex-row h-5/6'>
            <Image
              src='/campus.jpg'
              alt='background Image'
              width={1000}
              height={1000}
              className='w-3/5'
            />
            <div className='flex flex-col justify-evenly w-1/2 bg-wm-orange'>
              <div className='text-center py-2 text-white text-lg sm:text-xl md:text-2xl lg:text-4xl'>
                Meet Our Class
              </div>
              <div className='text-center text-wrap text-[8px] sm:text-[12px] md:text-xm lg:text-sm mx-8 sm:mx-12 md:text-16 lg:mx-28 py-2'>
                Tenetur rem modi vitae distinctio cum velit exercitationem aut,
                quos itaque impedit nisi! Facere voluptates tenetur, alias
                laborum expedita reiciendis aut, obcaecati quis maxime ad quos.
                Velit.
              </div>
              <div className='text-center text-wrap text-base sm:text-lg md:text-xl lg:text-2xl underline'>
                <Link href='/Students'>Our Students →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className=' flex flex-row justify-start py-20'>
          <div className='flex flex-col justify-evenly bg-wm-orange w-3/5 my-5'>
            <div className='text-center text-4xl py-5'>Events!</div>
            <div className='text-center text-wrap text-md mx-28 py-5'>
              Tenetur rem modi vitae distinctio cum velit exercitationem aut,
              quos itaque impedit nisi! Facere voluptates tenetur, alias laborum
              expedita reiciendis aut, obcaecati quis maxime ad quos. Velit.
            </div>
            <div className='text-center text-wrap text-2xl underline py-5'>
              <Link href='/Events'>Our Events →</Link>
            </div>
          </div>
          <Image
            src='/campus.jpg'
            alt='background Image'
            width={1000}
            height={1}
            className='h-auto w-[25%] rounded-full mx-5'
          />
        </div>

        {/* Animals */}
        <div className=' flex flex-row justify-end py-20 h-4/5'>
          <Image
            src='/campus.jpg'
            alt='background Image'
            width={1000}
            height={1}
            className='h-auto w-[25%] rounded-full mx-5'
          />

          <div className='flex flex-col justify-evenly bg-wm-orange w-3/5 my-5'>
            <div className='text-center text-4xl py-5'>Adopt Today!</div>
            <div className='text-center text-wrap text-md mx-28 py-5'>
              Tenetur rem modi vitae distinctio cum velit exercitationem aut,
              quos itaque impedit nisi! Facere voluptates tenetur, alias laborum
              expedita reiciendis aut, obcaecati quis maxime ad quos. Velit.
            </div>
            <div className='text-center text-wrap text-2xl underline py-5'>
              <Link href='/Events'>Save A Life Today →</Link>
            </div>
          </div>
        </div>

        {/* People Pleaser */}
        <div className=' flex flex-row justify-start py-20'>
          <div className='flex flex-col justify-evenly bg-wm-orange w-3/5 my-5'>
            <div className='text-center text-4xl py-2'>
              Be a Hero! <br /> Adopt Today!
            </div>
            <div className='text-center text-wrap text-md mx-28 py-5'>
              Tenetur rem modi vitae distinctio cum velit exercitationem aut,
              quos itaque impedit nisi! Facere voluptates tenetur, alias laborum
              expedita reiciendis aut, obcaecati quis maxime ad quos. Velit.
            </div>
            <div className='text-center text-wrap text-2xl underline pb-2'>
              <Link href='/Events'>Be A Hero →</Link>
            </div>
          </div>
          <Image
            src='/campus.jpg'
            alt='background Image'
            width={1000}
            height={1}
            className='h-auto w-[25%] rounded-full mx-5'
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
