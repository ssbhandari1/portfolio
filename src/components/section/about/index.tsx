import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col gap-5 items-start mt-20'>
            <button className='px-3 py-2 border border-gray-400 rounded'> About Me</button>
            <div className="text-start mb-8">
                <h4 className="text-4xl text-white font-bold">About</h4>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <span className="w-12 h-1 bg-secondary"></span>
                    <p className="text-4xl text-secondary font-semibold">Me</p>
                </div>
            </div>
            <p className='text-sm leading-[1.3`]'>I am a skilled MERN Stack Developer with expertise JavaScript, React,NextJs, Node.js, Express, Mongodb and . I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let us work together to bring your ideas to life!</p>

            <div className="text-lg text-white py-8 lg:py-16 space-y-4">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Phone</span>
                    <span>:</span>
                    <span>9650157684</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Email</span>
                    <span>:</span>
                    <span>santoshbhandarig@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Freelance</span>
                    <span>:</span>
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Skype</span>
                    <span>:</span>
                    <span>Hindi, English</span>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 border-t border-gray-500">
                <div className="space-y-2 col-span-1 flex items-center gap-3 p-2 border-r border-gray-500">
                    <div className="text-5xl font-bold flex items-center justify-center text-secondary">
                        <span>5</span>
                    </div>
                    <p className="text-sm text-white text-start">
                        <span>Completed<br /></span>
                        <span>Projects<br /></span>
                    </p>
                </div>

                <div className="space-y-2  col-span-1 flex items-center gap-4 p-2 border-r border-gray-500">
                    <div className="text-5xl font-bold flex items-center justify-center text-secondary">
                        <span>5</span>
                    </div>
                    <p className="text-sm text-white text-start">
                        <span>Completed<br /></span>
                        <span>Projects<br /></span>
                    </p>
                </div>

                <div className="space-y-2 col-span-1 flex items-center gap-3 p-2 border-r border-gray-500">
                    <div className="text-5xl font-bold flex items-center justify-center text-secondary">
                        <span>1.5+</span>
                    </div>
                    <p className="text-sm text-white text-start">
                        <span>Years<br /></span>
                        <span>Experience<br /></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About