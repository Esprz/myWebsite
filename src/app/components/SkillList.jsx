"use client"
import React from 'react'
import SkillsBar from './SkillsBar'

const skillsets = [
    {
        name: "C/C++",
        percentage: "80",
    },
    {
        name: "Python",
        percentage: "70",
    },
    {
        name: "Dart",
        percentage: "75",
    },
    {
        name: "Flutter",
        percentage: "85",
    },
    {
        name: "Javascript",
        percentage: "70",
    },
    {
        name: "HTML/CSS",
        percentage: "80",
    },
    {
        name: "React.js/Next.js",
        percentage: "75",
    },
    {
        name: "Racket",
        percentage: "80",
    },
]


const SkillList = () => {
    return (
        <div>
            {skillsets.map((skill) =>
                <SkillsBar key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage} />)}
        </div>
    )
}

export default SkillList
