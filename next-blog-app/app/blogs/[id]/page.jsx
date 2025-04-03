"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
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
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image className="border-4 border-white" src={data.image} width={1280} height={720} alt=""/>
      <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
      <p>{data.description}</p>
      <h3 className="my-5 text-[18px] font-semibold">Physical Health
✅ Maintain a balanced diet with nutritious foods.
 Exercise regularly (at least 30 minutes a day).
 Get 7-9 hours of quality sleep.</h3>

<p className="my-3">Managing your lifestyle effectively requires a balance of physical health, mental well-being, productivity, and personal growth. Prioritizing physical health through a nutritious diet, regular exercise, sufficient sleep, and proper hydration ensures your body functions optimally. </p>
<p className="my-3">Equally important is mental well-being, which can be maintained through mindfulness, stress management techniques, and meaningful social connections. Productivity plays a crucial role in leading an organized life, and this can be achieved by setting clear goals, managing time efficiently, and minimizing distractions.</p>

<div className="my-24">
  <p className="text-black font font-semibold my-4">Share this article on social media</p>
<div className="flex">
  <Image src={
    assets.facebook_icon
  } width={50} alt=""/>
  <Image src={
    assets.twitter_icon
  } width={50} alt=""/>
  <Image src={
    assets.googleplus_icon
  } width={50} alt=""/>
</div>
</div>



    </div>
    <Footer/>
    </>:<></>
  );
};

export default BlogPage;
