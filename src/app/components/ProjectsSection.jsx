import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    /*
    {
        id: 4,
        title: "ExchangeProphet",
        description: "A exchange rate forecast platform",
        img: "/images/projects/shell.png",
        tag: ["Python", "Tensorflow", "Pandas", "Matplotlib", "Seaborn"],
        gitUrl: "/",
    },*/
    {
        id: 3,
        title: "C Shell",
        description: "A basic shell written in C provides users with a simple yet efficient command-line interface for interacting with the operating system, facilitating execution of commands and management of processes.",
        img: "/images/projects/shell.png",
        tag: ["C","POSIX"],
        gitUrl: "https://github.com/Esprz/simple_shell",
    },
    {
        id: 2,
        title: "PagePulse",
        description: "An ebook reader, recognized as the Education Winner at HackHer2024, seamlessly integrates an open-source ebook reader written in React and TypeScript with an innovative offline translation feature powered by the Argotranslate API, enhancing the multilingual reading experience for users.",
        img: "/images/projects/pagepulse.png",
        tag: ["Typescript", "React", "HTML", "CSS", "Python", "Flask", "Argotranslate"],
        gitUrl: "https://devpost.com/software/versaverse",
    },
    {
        id: 1,
        title: "MOYU",
        description: "An innovative used book exchange app built with Flutter and Dart, leveraging LeanCloud as its backend, facilitating seamless swapping of books among users.",
        img: "/images/projects/moyu.png",
        tag: ["Dart", "Flutter","LeanCloud"],
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
