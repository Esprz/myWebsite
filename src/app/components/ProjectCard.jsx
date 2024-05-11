import React from 'react'
import Link from 'next/link'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import '../globals.css'

const ProjectCard = ({ imgUrl, title, tag, description, gitUrl }) => {
    const shouldShowCodeIcon = gitUrl != "/";
    return (
        <div >
            <div
                className='h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>

                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500 ">
                    {shouldShowCodeIcon && (<Link
                        href={gitUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>)}
                </div>

            </div>

            <div className='text-black rounded-b-xl py-6 px-4 bg-neutral-200 mt-3'>

                <h5 className='text-xl font-semibold mb-2'>{title}</h5>

                <p className='text-neutral-800 text-normal font-serif'>{description}</p>

                <div className='mt-2'>
                    {tag.map((tag, index) => (
                        <span key={index} >
                            <span className='text-neutral-500 italic font-light underline test-base'>{tag}</span>
                            {index !== { tag }.length - 1 && "  "}
                        </span>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProjectCard
