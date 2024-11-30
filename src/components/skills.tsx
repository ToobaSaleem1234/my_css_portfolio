import React from 'react'
import "../styles/skills.css"

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className="skills-grid">

        {/* first column: heading and paragraph: */}

        <div data-aos='zoom-in-up' className='skills-left'>
          <h2 className="skills-heading">
            My Skills
          </h2>
          <p className='skills-text'>
            As a detail-oriented and innovative web developer, I possess a robust skill set that enables me to craft dynamic and user-friendly digital experiences. With a solid foundation in front-end and back-end development, I excel at building responsive web applications, optimizing user interfaces, and ensuring seamless user experiences. I am committed to staying up-to-date with industry trends and expanding my skill set to deliver high-quality solutions.
          </p>
        </div>

        {/* second column: skills */}

        <div className="skills-right">
          <div className="skills-icon-grid">
            <div className="skills-space">
              <h2 data-aos="fade-down">Next.js</h2>
              <h2 data-aos="fade-down">Typescript</h2>
              <h2 data-aos="fade-down">React.js</h2>
            </div>
            
            <div className="skills-space">
              <h2 data-aos="fade-down">HTML</h2>
              <h2 data-aos="fade-down">CSS</h2>
              <h2 data-aos="fade-down">Tailwind CSS</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills