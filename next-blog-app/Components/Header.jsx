import Image from 'next/image'; // Import Next.js Image component
import { assets } from '@/Assets/assets';
import React from 'react';

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image 
          src={assets.nlogo} 
          width={180} 
          height={50} 
          alt='Company Logo' // Added alt attribute
          className='w-[130px] sm:w-auto'
        />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
          Get Started 
          <Image 
            src={assets.arrow} 
            width={20} // Set width
            height={20} // Set height 
            alt='Arrow Icon' // Added alt attribute
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
