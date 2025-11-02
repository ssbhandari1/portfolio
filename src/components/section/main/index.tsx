import React from 'react'
import Info from '../info'
import About from '../about'
import Contact from '../contact'
import Experience from '../experience'
import Skills from '../skills'
import Projects from '../projects'

const MainContent = () => {
  return (
    <div className="p-6 lg:mr-30 my-4 flex flex-col gap-10">
      <section id="home">
        <Info />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}


export default MainContent