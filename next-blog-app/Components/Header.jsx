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
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[700px] m-auto text-xs sm:text-base'>Stay updated with our latest blogs featuring insights, trends, and tips.Discover the latest updates, reviews, and thought-provoking discussions.</p>
        <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black' action="">
          <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none'/>
          <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600  active:text-white'>Subscribe</button>
        </form>


      </div>
    </div>
  );
}

export default Header;
