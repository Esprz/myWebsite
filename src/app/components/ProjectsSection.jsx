import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 7,
        title: "CityHunter",
        description: "A gamified city exploration and local marketing app built with Vue.js, Pinia, and powered by Google Maps Platform. Users can explore cities, complete challenges, and earn rewards while local businesses can promote their services and attract customers.",
        img: "/images/projects/CityHunter.jpg",
        tag: ["Vue.js", "Pinia", "Google Maps Platform", "TailwindCSS", "Vercel"],
        gitUrl: "https://devpost.com/software/city-hunter-i25zc3",
    },
    {
        id: 6,
        title: "StudySphere",
        description: "A full-stack study social media web application, providing a platform for users to share and explore study posts, resources, and tips.",
        img: "/images/projects/StudySphere.png",
        tag: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "JWT", "TailwindCSS", "ShadCN"],
        gitUrl: "https://github.com/Esprz/StudySphere",
    },
    {
        id: 5,
        title: "Chess",
        description: "A versatile chess game offering both graphical and text-based displays. Supports human vs. computer, computer vs. computer, and human vs. human play. Built with OOP principles and design patterns (MVC, Observer) for a robust and maintainable codebase.",
        img: "/images/projects/chess.png",
        tag: ["C++", "Make", "OOP", "MVC"],
        gitUrl: "https://git.uwaterloo.ca/s56zhao/chess",
    },
    {
        id: 4,
        title: "ExchangeRateProphet",
        description: "A Streamlit-based Python web application designed to provide users with historical exchange rate data and predictions based on a custom LSTM model. ",
        img: "/images/projects/ExchangeRateProphet.png",
        tag: ["Python", "LSTM", "Tensorflow", "Pandas", "Numpy", "Matplotlib", "Sklearn", "Streamlit"],
        gitUrl: "https://github.com/Esprz/ExchangRateProphet",
    },
    {
        id: 3,
        title: "Simple Shell",
        description: "A basic shell written in C provides users with a simple yet efficient command-line interface for interacting with the operating system, facilitating execution of commands and management of processes.",
        img: "/images/projects/shell.png",
        tag: ["C", "POSIX"],
        gitUrl: "https://github.com/Esprz/simple_shell",
    },
    {
        id: 2,
        title: "PagePulse",
        description: "An ebook reader, recognized as the Education Winner at HackHer2024, seamlessly integrates an open-source ebook reader written in React and TypeScript with an innovative offline translation feature powered by the Argotranslate API, enhancing the multilingual reading experience for users.",
        img: "/images/projects/pagepulse.png",
        tag: ["Python", "Flask", "Typescript", "React", "HTML", "CSS", "Argotranslate"],
        gitUrl: "https://devpost.com/software/versaverse",
    },

    {
        id: 1,
        title: "MOYU",
        description: "An innovative used book exchange app, built with Flutter and Dart, leveraging LeanCloud as its backend. It facilitates seamless swapping of books among users. With a user base of 200+ individuals in the high school campus, it has obtained a Copyright Certificate in China.",
        img: "/images/projects/moyu.png",
        tag: ["Dart", "Flutter", "LeanCloud"],
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
