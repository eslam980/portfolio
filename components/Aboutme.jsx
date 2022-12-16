import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Aboutme = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1800px] m-auto px-2 w-full '>
        <p className='text-xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800'>
          About Me
        </p>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-black rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <h2 className='py-2 font-sans'>eslam980</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-md shadow-black rounded-xl lg:p-4'>
            <p>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
            </p>
            <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-3xl shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-3xl shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div className='rounded-3xl shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='/resume'>
                    <div className='rounded-3xl shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>


              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
