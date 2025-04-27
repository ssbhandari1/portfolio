import Link from 'next/link';
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Theater",
      // img: theater,
      link: "https://mycinemas.netlify.app",
      discription:'Theater is a modern web application built with Next.js, React, TypeScript, and Tailwind CSS to display comprehensive movie information. It uses the TMDB API to fetch real-time data about popular, top-rated, upcoming, and now-playing movies. Users can explore movie details such as cast, synopsis, ratings, and genres, along with a dedicated section for the latest releases. The app features user-friendly interface.'
    },

  ];
  return (
    <div className='flex flex-col gap-5 items-start mt-20'>
      <button className='px-3 py-2 border border-gray-400 rounded'> Projects</button>
      <div className="text-start mb-8">
        <h4 className="text-4xl text-white font-bold">My Recent</h4>
        <div className="flex items-center justify-center gap-4 mt-2">
          <span className="w-12 h-1 bg-secondary"></span>
          <p className="text-4xl text-secondary font-semibold underline">Projects</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative w-full h-60 overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <Link
              href={project?.link}
              target="_blank"
              className="absolute top-0 z-50  right-0 p-2 rounded transition-opacity duration-200 bg-slate-800 text-white group-hover:bg-secondary"
            >
              <FiArrowUpRight className="text-4xl" />
            </Link>

            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt="Card Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-center items-center px-6 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-[0.8rem]">
                {project.discription}
              </p>
            </div>

            
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects