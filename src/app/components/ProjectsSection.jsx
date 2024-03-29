import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    /*{
        id: 4,
        title: "ExchangeProphet",
        description: "A exchange rate forecast platform",
        img: "/images/projects/",
        tag: ["Python", "Tensorflow"],
        gitUrl: "/",
    },*/
    {
        id: 3,
        title: "C Shell",
        description: "A basic shell written in C",
        img: "/images/projects/shell.png",
        tag: ["C"],
        gitUrl: "https://github.com/Esprz/simple_shell",
    },
    {
        id: 2,
        title: "PagePulse",
        description: "An enhanced open source ebook reader that incorporates translation features",
        img: "/images/projects/pagepulse.png",
        tag: ["Typescript", "React", "HTML", "CSS", "Python", "Flask"],
        gitUrl: "https://devpost.com/software/versaverse",
    },
    {
        id: 1,
        title: "MOYU",
        description: "An idle tutorial book exchanging app",
        img: "/images/projects/moyu.png",
        tag: ["Dart", "Flutter"],
        gitUrl: "https://github.com/Esprz/MOYU",
    }
]

const ProjectsSection = () => {

    return (
        <section id="projects">
            <div className='text-black px-4 lg:px-16 xl:px-60'>
                <h2 className='section-title'>
                    Projects
                </h2>
                <div className='grid md:grid-cols-2 gap-8 md:gap-12 mt-10'>
                    {projectsData.map((project) =>
                        <ProjectCard key={project.id}
                            imgUrl={project.img}
                            title={project.title}
                            description={project.description}
                            tag={project.tag}
                            gitUrl={project.gitUrl}
                        />)}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
