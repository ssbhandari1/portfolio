import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
const Skills = () => {
    const expertAreas = [
        {
            name: "ReactJs",
            icon: <FaReact className="text-5xl text-sky-300" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://react.dev"
        },
        {
            name: "NextJs",
            icon: <RiNextjsFill className="text-5xl" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://nextjs.org/"
        },
        {
            name: "JavaScript",
            icon: <FaJsSquare className="text-5xl text-yellow-300" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScrip"
        },
        {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-5xl text-cyan-400" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://tailwindcss.com"
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className="text-5xl text-blue-600" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://www.typescriptlang.org"
        },	
        {
            name: "Redux",
            icon: <TbBrandRedux className="text-5xl text-green-500" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://redux.js.org"
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="text-5xl text-green-500" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://nodejs.org"
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className="text-5xl text-green-600" />,
            color: "bg-slate-900 border border-gray-300",
             link: "https://www.mongodb.com"
        },	
        {
            name: "HTML",
            icon: <FaHtml5 className="text-5xl text-cyan-400" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            name: "MUI",
            icon: <SiMui className="text-5xl text-cyan-300" />,
            color: "bg-slate-900 border border-gray-300",
            link: "https://mui.com"
        },
        {
            name: "Git",
            icon: <FaGithub className="text-5xl" />,
            color: "bg-slate-900 border border-gray-300",
             link: "https://git-scm.com/"
        }
    ];
  return (
    <div className='flex flex-col gap-5 items-start mt-20'>
               <button className='px-3 py-2 border border-gray-400 rounded'> Skills</button>
               <div className="text-start mb-8">
                   <h4 className="text-4xl text-white font-bold">MY Skills</h4>
                   <div className="flex items-center justify-center gap-4 mt-2">
                       <span className="w-12 h-1 bg-secondary"></span>
                       <p className="text-4xl text-secondary font-semibold underline">& Tools</p>
                   </div>
               </div>
               <div className='w-full rounded flex flex-col p-1'>
			<div className='w-full flex-1'>
				<ul className="w-full p-4 grid grid-cols-2 md:grid-cols-3 gap-4 bg-slate-800" style={{ scrollbarWidth: 'none' }}>
					{expertAreas.map((expert, index) => (
						  <li
                          key={index}
                          className={`group ${expert.color} h-30 rounded-md flex justify-center items-center cursor-pointer hover:border-secondary relative`}
                        >
                          <div className="flex flex-col items-center">
                            {expert.icon}
                          </div>
                          <Link
                            href={expert.link}
                            target="_blank"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white"
                          >
                            <FiArrowUpRight className="text-xl text-secondary" />
                          </Link>
                        </li>
					))}
				</ul>
			</div>
		</div>
           </div>
  )
}

export default Skills