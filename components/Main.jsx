import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-gradient-to-t from-black to-Dark-color  shadow-md shadow-purple-900 '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-300'>
            Legendary
          </p>
          <h1 className='py-4 text-gray-100'>
            I&#39;m <span className=' font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800'> eslam980</span>
          </h1>
          <h1 className='py-2 text-gray-100 text-3xl'>Gamer | Legend | Developer</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
