"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-neutral-400 bg-opacity-80'>
            <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">

                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)}
                                className='icon'>
                                <Bars3Icon className="h-5 w-5" />
                            </button>

                        ) : (
                            <button onClick={() => setNavbarOpen(false)}
                                className='icon'>

                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>

                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-4'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>


            </div>
            {navbarOpen ? (<MenuOverlay links={navLinks} />) : null}
        </nav>
    );
};

export default Navbar
