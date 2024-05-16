import Image from 'next/image';
import { FC } from 'react';

interface InfoCardProps {
  imageUrl: string;
  name: string;
  age: string;
  gender: string;
}

const Card: FC<InfoCardProps> = ({ imageUrl, name, age, gender }) => {
  return (
    <div className='relative h-[35vh] w-[15vw] m-5 rounded-lg shadow-sm overflow-hidden'>
      <Image
        src={imageUrl}
        alt={name}
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 z-0'
      />
      <div className='relative z-10 flex flex-col justify-end h-full p-4 bg-black bg-opacity-25 text-white'>
        <p className='text-2xl font-semibold'>{name}</p>
        <p className='text-lg'>{age}</p>
        <p className='text-lg'>{gender}</p>
      </div>
    </div>
  );
};

export default Card;
