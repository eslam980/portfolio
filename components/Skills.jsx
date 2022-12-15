import Image from 'next/image';
import React from 'react';
import Csharp from '../public/assets/skills/csharp.png';
import Rust from '../public/assets/skills/rust.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Unity from '../public/assets/skills/Unity.png';
import flutter from '../public/assets/skills/flutter.png';
import python from '../public/assets/skills/python.png';
import Cplus from '../public/assets/skills/cplus.png';
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#ffd20c]'>
          Skills
        </p>
        <h2 className='py-4'>My Weapons : </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Unity} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Unity</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Csharp} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>C#</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Cplus} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>C++</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Rust} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Rust</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Python</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Next js</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Github</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Javascript</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Firebase</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Tailwind</h3>
              </div>
            </div>
          </div>


          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>React</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-md shadow-gray-800 rounded-md hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={flutter} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-black mr-6'>Flutter</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
