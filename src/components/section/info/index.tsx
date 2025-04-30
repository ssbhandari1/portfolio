import Link from 'next/link'
import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <button className='px-3 py-2 border border-gray-400 rounded'> Inroduced</button>
      <h4 >HOWDY! I AM Santosh</h4>

      <h1 className='text-2xl md:text-4xl font-extrabold leading-[1.5] ' >I am a <br /><b className='text-secondary md:text-5xl'>MERN Stack Developer</b> <br />Based in New Delhi, India.</h1>
      <p className='text-sm leading-[1.3`]'>MERN Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB. Skilled in building scalable, efficient, and user-friendly web applications. Proven ability to collaborate effectively within cross-functional teams to deliver high-quality, full-stack solutions</p>

      <div className='flex gap-3'>
        <Link
          className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          href={"/contact"}
        >

          <span>Hire Me!</span>
        </Link>
        <button className='ml-3 text-xl underline'> view my Work</button>
      </div>
    </div>
  )
}

export default Info