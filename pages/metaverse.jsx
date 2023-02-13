import Image from 'next/image';
import React from 'react';
import metaverseImg from '../public/assets/projects/metaverse.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const nike = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={metaverseImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Nike Ecommerce </h2>
          <h3>Next JS / Tailwind / FramerMotion</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Metaverse is an online virtual world where users can interact with each other and experience a new level of immersion in a virtual environment. I was responsible for creating and implementing the design and user experience for the website. The website features stunning motion graphics and intuitive navigation, allowing users to fully immerse themselves in the world of Metaverse. With a focus on accessibility and user-friendly design, we strive to make the Metaverse experience accessible and enjoyable for everyone. This project showcases our ability to work on cutting-edge technology and deliver visually stunning, user-centered designs.
          </p>
          <a
            href='https://github.com/TemiloluwaPraise/Metaverse-Website'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
          </a>
          <a
            href='https://temibillionsmetaverse.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Visit Site </button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> FramerMotion
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
              
              {/* <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
              </p> */}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default nike;
