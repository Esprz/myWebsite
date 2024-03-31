"use client"
import React from 'react'
import SkillList from './SkillList'
import ToolsTagCloud from './TagCloud'

const AboutSection = () => {
  return (
    <section id="about" className='text-black'>
      <div className='container py-8 px-4 xl:gap-16 sm:py-16 lg:px-16 xl:px-60'>
        <h2 className='section-title'>About Me</h2>

        <div className='grid md:grid-cols-12 justify-center mx-auto'>
          <div className='col-span-4'>
            <ul className='text-base lg:text-lg space-y-5 mt-4 mb-8 md:ml=[5%] lg:ml-[10%]'>
              <li>&#8226;  Math @ Uwaterloo GPA: 4.0/4.0</li>
              <li>&#8226;  Winner @ Hackher2024</li>
              <li>&#8226;  Photographer @ CSC</li>
            </ul>
          </div>
          {/*<SkillList className='flex justify-end'/>*/}
          <div className='col-span-8'>
            <ToolsTagCloud />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
