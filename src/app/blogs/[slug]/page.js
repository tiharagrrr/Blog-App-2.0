import { allBlogs } from "@/.contentlayer/generated"
import Tag from "../../../components/Elements/Tag"
import Image from "next/image"
import React from "react"
import BlogDetails from "@/src/components/Blog/BlogDetails"
import RenderMdx from "@/src/components/Blog/RenderMdx"

export default async function BlogPage({ params }) {
  const {slug} = await params
  console.log(slug)
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug)
  
  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 p-6 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag 
            name={blog.tags[0]} 
            link={`/categories/${blog.tags[0]}`}
            className='px-6 text-sm py-2' 
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-auto bg-dark/20 backdrop-blur border border-light/40 rounded-full px-5">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60">
          <Image 
            src={blog.image.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className='aspect-square w-full h-full object-cover object-center'
          />
        </div>
      </div>
      <BlogDetails blog={blog} slug={slug} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">toc</div>
        <RenderMdx blog={blog} className="" />
      </div>
    </article>
  )
}