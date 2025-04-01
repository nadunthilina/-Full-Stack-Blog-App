import { blog_data } from '@/Assets/assets'
import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button className='bg-black text-white py-1 px4 rounded-sm'>All</button>
            <button>Tecnology</button>
            <button>Startup</button>
            <button>Lifestyle</button>

        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.map((items,index)=>{
                return <BlogItem key={index} image={items.image} title={items.title} description={items.description} category={items.category}/>

            })}

        </div>
    </div>
  )
}

export default BlogList