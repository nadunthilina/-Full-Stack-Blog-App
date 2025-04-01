"use client";
import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

export default function BlogItem() {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black">
      <Image src={blog_data[0].image} alt="" width={400} height={400} className="border-b border-black" />
      <p className="ml-5 mt-5vpx-1 inline-block bg-black text-white text-sm">{blog_data[0].category}</p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{blog_data[0].title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{blog_data[0].description}</p>
      </div>
    </div>
  );
}
