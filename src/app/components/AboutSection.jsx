import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className='text-black'>
        <div className='container py-8 px-4 xl:gap-16 sm:py-16 lg:px-16 xl:px-16'>
            <h2 className='section-title'>About Me</h2>
            <div className='grid justify-center mx-auto'>
              <ul className='text-base lg:text-lg'>
                <li>Math @ Uwaterloo GPA: 4.0/4.0</li>
                <li>Winner @ Hackher2024</li>
                <li>Photographer @ CSC</li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
