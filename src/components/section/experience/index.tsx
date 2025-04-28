import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";

const Experience = () => {
    const experiences = [
        {
            date: "2023/10 - present",
            company: "Misemind Pvt Ltd",
            position: "MERN Stack Developer",
            location: 'Delhi, india',
            discription: `Built two form-driven web applications -Trading Partner Search and Supplier Onboarding - using React.js with dynamic UI rendered from backend metadata/configs. Developed Node.js + Express backend (BFF layer) to manage API integrations and encapsulate business logic following clean architecture principles. Wrote unit tests using Jest and end-to-end (E2E) test cases with Puppeteer and Playwright to ensure robust application quality. Actively handled high-priority production issues using Splunk for log analysis and debugging.Followed CI/CD workflows with GitHub, Snyk, and SonarQube, deploying across pre-prod and prod environments`
        },
        {
            date: "2023/03 - 2023/07",
            company: "Indian Robotic Solution",
            position: "Frontend Developer intern",
            location: 'Noida, india',
            discription: `Worked in a small team to enhance the company's website using React.js, Redux, and Context API. Integrated REST APIs and collaborated with backend developers to implement key features and UI improvements`
        },
        {
            date: "2022/11 - 2023/02",
            company: "Softmind Pvt Ltd",
            position: "Web developer intern",
            location: 'Noida, india',
            discription: `Learned core web technologies including HTML, CSS, JavaScript, and basic React.js. Built static and dynamic personal and portfolio websites, focusing on responsive design and clean layouts`
        },
    ];
    return (
        <div className='flex flex-col gap-5 items-start mt-20'>
            <button className='px-3 py-2 border border-gray-400 rounded'> Experience</button>
            <div className="text-start mb-8">
                <h4 className="text-4xl text-white font-bold">MY</h4>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <span className="w-12 h-1 bg-secondary"></span>
                    <p className="text-4xl text-secondary font-semibold underline">Experience</p>
                </div>
            </div>
            <div className="w-full flex-1">
                <div
                    className="w-full bg-slate-800"
                    style={{ scrollbarWidth: "none" }}
                >
                    <ul className="list-none rounded-lg shadow-md bg-slate-800 w-full">
                        {experiences.map((experience, index) => (
                            <li
                                key={index}
                                className="p-4 flex flex-col gap-3 border-b border-slate-700 last:border-none"
                            >
                                <div className="flex items-center gap-4">
                                    <BsBuildingsFill className="text-4xl text-gray-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{experience.position}</h3>
                                        <p className="text-xs uppercase font-semibold text-gray-400">{experience.company}</p>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-300">
                                    {experience.discription}
                                </p>

                                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-2">
                                    <p className="text-xs text-gray-400">{experience.date}</p>
                                    <p className="text-xs text-gray-300">{experience.location}</p>
                                </div>
                            </li>
                        ))}
                    </ul>



                </div>
            </div>
        </div>
    )
}

export default Experience