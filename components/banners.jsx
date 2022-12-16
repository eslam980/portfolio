import Image from 'next/image';
import React from 'react';


const Banners = () => {
  return (
    <div id='Banner' className='w-full'>
        <div className='max-w-[1800px] mx-auto px-2 py-16'>
            
            <h2 className='py-4'>Connect with me : </h2>

            <div className='bg-zinc-900 py-6 rounded-md shadow-md shadow-black grid md:grid-cols-5 gap-8'>

                <a href="/goggeri" className='mx-6  flex  items-center justify-center py-5'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg" height='200' width='200' alt="image"/>
                </a>

                <a href="/goggeri" className=' mx-6  flex  items-center justify-center py-5'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg" height='200' width='200' alt="image"/>
                </a>

                <a href="/goggeri" className='mx-6  flex  items-center justify-center py-5'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Kickstarter_logo_2019.svg" height='200' width='200' alt="image"/>
                </a>

                <a href="/goggeri" className='mx-6  flex  items-center justify-center py-5'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg" height='200' width='200' alt="image"/>
                </a>

                <a href="/goggeri" className='mx-6  flex  items-center justify-center py-5'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" height='200' width='200' alt="image"/>
                </a>

            </div>
        </div>
    </div>
  );
};

export default Banners;
