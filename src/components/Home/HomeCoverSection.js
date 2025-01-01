import { sortBlogs } from '@/src/utils.js'
import Image from 'next/image'
import React from 'react'

const HomeCoverSection = ({blogs}) => {

  const sortedBlogs = sortBlogs(blogs)
  const blog = sortedBlogs[0]
  return (
    <div className='w-full'>
      <article className='flex flex-col items-start justify-end mx-10 relative h-[60vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl' />
      <Image src={blog.image.filePath.replace("../public", "")} 
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className='w-full h-full object-center object-cover rounded-3xl -z-10'
        sizes='100vw'

      />
      <div className='w-3/4 p-16 flex flex-col items-start justify-center z-0' />
    </article>
    </div>

  )
}

export default HomeCoverSection