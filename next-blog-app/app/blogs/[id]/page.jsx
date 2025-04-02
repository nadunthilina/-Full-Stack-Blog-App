"use client";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (params?.id) {
      const blog = blog_data.find((item) => Number(params.id) === item.id);
      setData(blog || null);
    }
  }, [params.id]);

  if (!data) {
    return <div className="text-center text-gray-500">Blog not found</div>;
  }

  return (
    <div className='bg-gray-299 py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">

      </div>
     
      <Image src={assets.nlogo} width={180} alt="" className="w-[130px] sm:w-auto" />
      <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
        Get Started <Image src={assets.arrow} alt="" />
      </button>
    </div>
  );
};

export default BlogPage;
