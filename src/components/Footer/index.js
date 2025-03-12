"use client"

import React from 'react'
import { useForm } from 'react-hook-form';
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';
import Link from 'next/link';

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <footer className='mt-16 bg-dark text-light m-10 p-3 rounded-2xl flex flex-col items-center pb-5'>
      <h3 className='mt-10 text-4xl font-medium text-center capitalize px-4'>
        Interesting Stories | Updates | Guides
      </h3>
      <p className='text-center mt-5 px-4 w-3/5 font-light text-base'>
        Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
        © 2023 CodeBucks. All rights reserved.
        Made with ❤ by Twee
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4'>
      <input type="text" placeholder="Enter your email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
      className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-b mr-2 pb-1'/>

      <input type="submit" className='px-5 bg-dark text-light cursor-pointer font-medium rounded' />
    </form>
          <div className='flex items-center mt-8'>
            <a
              href="http://example.com"
              className="inline-block w-6 h-6 mr-4 hover:scale-110 transition-all ease duration-200"
            >
              <LinkedinIcon></LinkedinIcon>
            </a>
            <a
              href="http://example.com"
              className="inline-block w-6 h-6 mr-4 hover:scale-110 transition-all ease duration-200"
            >
              <TwitterIcon></TwitterIcon>
            </a>
            <a
              href="http://example.com"
              className="inline-block w-6 h-6 mr-4 hover:scale-110 transition-all ease duration-200 fill-light"
            >
              <GithubIcon />
            </a>
            <a
              href="http://example.com"
              className="inline-block w-6 h-6 mr-4 hover:scale-110 transition-all ease duration-200"
            >
              <DribbbleIcon />
            </a>
          </div>

          <div className='w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
            <span>&copy;2025 tiharaeg. No rights reserved.</span>
            <Link href="/sitemap.xml">sitemap.xml</Link>
          </div>
    </footer>
  )
}

export default Footer