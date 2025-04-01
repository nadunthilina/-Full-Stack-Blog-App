import { assets } from '@/Assets/assets';
import React from 'react';
import Image from 'next/image';  // ✅ Import Next.js Image

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-white py-5 items-center'>
      <Image src={assets.nlogo} alt='Logo' width={180} height={150} />  {/* ✅ Added height */}
    </div>
  );
}

export default Footer;
