"use client";

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";

const BlogPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (params?.id) {
      const blog = blog_data.find((item) => Number(params.id) === item.id);
      setData(blog || null);
    }
  }, [params?.id]);

  if (!data) {
    return <div className="text-center text-gray-500 py-10">Blog not found</div>;
  }

  return (data?<>
    <div className="bg-gray-200 px-5 md:px-12 lg:px-28 py-2"> {/* Reduced height */}
      <div className="flex justify-between items-center">
        <Image src={assets.nlogo} width={180} height={50} alt="Logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={assets.arrow} width={20} height={20} alt="Arrow" />
        </button>
      </div>
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt=""/>
      </div>
    </div>
    </>:<></>
  );
};

export default BlogPage;
