'use client'
import { getExperience } from '@/utils/helper';
import Link from 'next/link'
import React from 'react'

const Info = () => {
   const experience = getExperience('2023-10-01');
  return (
    <div className='flex flex-col gap-5 items-start bg-slate-800 p-3 rounded-md'>
      <button className='px-3 py-2 border border-gray-400 rounded text-white hover:text-secondary transition'> Inroduced</button>
      <h4 >HOWDY! I AM Santosh</h4>

      <h1 className='text-2xl md:text-4xl font-extrabold leading-[1.5] ' >I am a <br /><b className='text-secondary md:text-5xl'>MERN Stack Developer</b> <br />Based in New Delhi, India.</h1>
      <p className='text-sm leading-[1.3`]'>MERN Stack Developer with <b>{experience} years</b>   of experience in developing and optimizing web applications, specializing in React.js, Next.js, and TypeScript
        on the frontend, with solid backend expertise in Node.js and REST APIs. Proven track record of reducing API latency by 25%, increasing user
        retention by 30% through impactful UI/UX improvements</p>

      <div className='flex gap-3'>
        <Link
          className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          href={"#contact"}
        >

          <span>Hire Me!</span>
        </Link>
        <Link

          href={"#projects"}
        >
          <p className='ml-3 mt-2 text-sm cursor-pointer text-blue-500 hover:text-secondary'> view my Work</p>
        </Link>

      </div>
    </div>
  )
}

export default Info