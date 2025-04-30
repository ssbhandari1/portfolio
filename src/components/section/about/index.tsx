import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col gap-6 items-start mt-20 px-4">
            <button className="px-4 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-secondary hover:text-white transition">
                About Me
            </button>

            <div className="text-start">
                <h4 className="text-4xl font-bold text-white">About</h4>
                <div className="flex items-center gap-4 mt-2">
                    <span className="w-12 h-1 bg-secondary"></span>
                    <p className="text-4xl font-semibold text-secondary">Me</p>
                </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                As a quick learner and a collaborative partner, I work closely with clients and teams to deliver clean, maintainable code and seamless user experiences. I am passionate about solving real-world problems through technology and continuously refining my skills to stay ahead in this fast-evolving industry.

                I am excited to contribute my knowledge and creativity to meaningful projects — lets collaborate and bring your vision to life.
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 text-white text-sm">
                {[
                    { label: "Phone", value: "9650157684" },
                    { label: "Email", value: "santoshbhandarig@gmail.com" },
                    { label: "Freelance", value: "Available" },
                    { label: "Languages", value: "Hindi, English" },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <span className="font-semibold">{item.label}:</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-gray-700 pt-8">
                <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-secondary">5</div>
                    <p className="text-sm text-gray-300 mt-2">
                        Completed <br /> Projects
                    </p>
                </div>

                {/* <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-secondary">5</div>
                    <p className="text-sm text-gray-300 mt-2">
                        Completed <br /> Projects
                    </p>
                </div> */}

                <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-secondary">1.5+</div>
                    <p className="text-sm text-gray-300 mt-2">
                        Years <br /> Experience
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
