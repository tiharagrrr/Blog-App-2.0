import { sortBlogs } from '@/src/utils.js'
import Link from 'next/link'
import React from 'react'
import BlogLayoutThree from '../Blog/BlogLayoutThree'

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
        <div className='flex justify-between w-full'>
            <h2 className='inline-block font-bold capitalize text-4xl'>Recent Posts</h2>
            <Link href="/categories/all" className='inline-block font-medium text-accent underline underline-offset-2 text-lg'>View Link</Link>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-16 mt-16'>
            {
                sortedBlogs.slice(5,11).map((blog,index) => {
                    return <article className='col-span-1 row-span-1 relative' key={index}>
                        <BlogLayoutThree blog={blog} />
                    </article>
                })
            }
        </div>
    </section>
  )
}

export default RecentPosts