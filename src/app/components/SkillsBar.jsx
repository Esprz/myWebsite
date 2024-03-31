"use client"
import React from 'react'

const SkillsBar = ({ skill, percentage }) => {
    return (
        <div className='lg:ml-[5%]' >
            <div className="flex justify-between items-center">
                <h2 className="font-light">{skill}</h2>
                {/*<p className="text-gray-500">{level}</p>*/}
            </div>
            <div class="lg:w-[90%] sm:w-full bg-neutral-300 rounded-full h-2 mb-4">
                <div class="bg-neutral-500 h-2 rounded-full" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default SkillsBar
