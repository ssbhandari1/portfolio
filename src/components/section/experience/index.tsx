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
                    <ul className="list rounded-box shadow-md bg-slate-800">
                        {experiences.map((experience, index) => (
                            <li key={index} className="list-row">
                                <div><BsBuildingsFill className='size-10 text-gray-400' /></div>
                                <div>
                                    <div> {experience.position}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">{experience.company}</div>
                                </div>
                                <p className="list-col-wrap text-gray-300 text-xs">
                                    {experience.discription}
                                </p>
                                <div className='text-end'>
                                    <p className="text-gray-500 text-xs whitespace-nowrap">{experience.date}</p>
                                    <p className='text-gray-300 text-xs'>{experience.location}</p>
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