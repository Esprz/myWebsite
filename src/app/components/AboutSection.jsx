import React from 'react'
import SkillList from './SkillList'

const AboutSection = () => {
  return (
    <section id="about" className='text-black'>
        <div className='container py-8 px-4 xl:gap-16 sm:py-16 lg:px-16 xl:px-16'>
            <h2 className='section-title'>About Me</h2>

            <div className='grid md:grid-cols-2 justify-center mx-auto'>
              <div>
                <ul className='text-base lg:text-lg space-y-5 mt-4 mb-8'>                
                  <li>&#8226;  Math @ Uwaterloo GPA: 4.0/4.0</li>
                  <li>&#8226;  Winner @ Hackher2024</li>
                  <li>&#8226;  Photographer @ CSC</li>
                </ul>
              </div>
              <SkillList />
            </div>
        </div>
    </section>
  )
}

export default AboutSection
