import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import project1_1 from '../public/assets/projects/Giggos/Goggeri_es_2.PNG';
import project1_2 from '../public/assets/projects/Giggos/Goggeri_es_3.PNG';
import project1_3 from '../public/assets/projects/Giggos/Goggeri_es_4.PNG';
import project1_4 from '../public/assets/projects/Giggos/Goggeri_es_5.PNG';
import project1_5 from '../public/assets/projects/Giggos/Goggeri_es_6.PNG';
import project1_logo from '../public/assets/projects/Giggos/Logo.png';

const goggeri = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={project1_3}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Goggeri</h2>
          <h3>Unity | C#</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Game</p>
          <Image className='rounded-xl group-hover:opacity-10 ' width={200} height={100} src={project1_logo} alt='/' /> 
          <h2>Overview</h2>
          <p>
            This is Goggeri a Open world game where you can go and discover what
            happen to city and the old castles.
          </p>

        </div>

        <div className='col-span-4 md:col-span-1 shadow-md shadow-black rounded-lg py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Unity
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C#
              </p>              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>More Photos : </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-100 w-100 shadow-md shadow-black rounded-xl'>
            <Image className='rounded-xl group-hover:opacity-10' src={project1_1} alt='/' /> 
          </div>
          <div className='relative flex items-center justify-center h-100 w-100 shadow-md shadow-black rounded-xl'>
            <Image className='rounded-xl group-hover:opacity-10' src={project1_2} alt='/' /> 
          </div>
          <div className='relative flex items-center justify-center h-100 w-100 shadow-md shadow-black rounded-xl'>
            <Image className='rounded-xl group-hover:opacity-10' src={project1_3} alt='/' /> 
          </div>
          <div className='relative flex items-center justify-center h-100 w-100 shadow-md shadow-black rounded-xl'>
            <Image className='rounded-xl group-hover:opacity-10' src={project1_4} alt='/' /> 
          </div>
          <div className='relative flex items-center justify-center h-100 w-100 shadow-md shadow-black rounded-xl'>
            <Image className='rounded-xl group-hover:opacity-10' src={project1_5} alt='/' /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default goggeri;
