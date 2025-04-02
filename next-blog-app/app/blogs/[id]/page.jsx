"use client";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";

const BlogPage = ({ params }) => {
  const resolvedParams = use(params); // Unwrap params Promise
  const [data, setData] = useState(null);

  useEffect(() => {
    if (resolvedParams?.id) {
      const blog = blog_data.find((item) => Number(resolvedParams.id) === item.id);
      setData(blog || null);
    }
  }, [resolvedParams?.id]); // Ensure reactivity

  if (!data) {
    return <div className="text-center text-gray-500">Blog not found</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.description}</p>
      <Image src={assets.nlogo} width={180} alt="" className="w-[130px] sm:w-auto" />
      <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
        Get Started <Image src={assets.arrow} alt="" />
      </button>
    </div>
  );
};

export default BlogPage;
