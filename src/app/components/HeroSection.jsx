"use client"
import React from 'react'
import Image from 'next/image'
import './style.css'
import HeroSectionAnimation from './HeroSectionAnimation.jsx'
import Link from 'next/link'
import { SpeakerWaveIcon } from '@heroicons/react/24/outline'
import cnchar from 'cnchar';
import 'cnchar-voice';

const HeroSection = () => {
    const namePronounceClick = () => {
        cnchar.voice.speak('思源 赵');
        //alert('Button clicked!');
    };
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hello, I&apos;m
                        <br></br>
                        {/*
                        <div className='md:flex md:flex-row'>
                            <HeroSectionAnimation />
                            <div className='md:ml-4 sm:items-center sm:mt-4'>
                                <button onClick={namePronounceClick}>
                                    <SpeakerWaveIcon className="md:mb-2 lg:mb-4 sm:h-10 w-10 text-neutral-500 hover:bg-neutral-300" />
                                </button>
                            </div>
                        </div>
                        */}
                        <div className='flex flex-row'>
                            <HeroSectionAnimation />
                            <div className='md:ml-4 sm:items-center '>
                                <button onClick={namePronounceClick}>
                                    <SpeakerWaveIcon className="sm:h-10 w-10 text-neutral-500 hover:bg-neutral-300" />
                                </button>
                            </div>
                        </div>
                    </h1>
                    
                    <p className='text-neutral-600 mb-6 text-base sm:text-lg lg:text-xl'>
                        Data Science @ Uwaterloo
                    </p>
                    

                    <div>
                        {/*<Link href={'https://drive.google.com/file/d/1GsPFWzeqQk9DMa3816CuMjXtuyRkujZA/view?usp=drive_link'} >
                            <button className='button-widget bg-black text-white hover:bg-neutral-400'>
                                Download Resume
                            </button>
                        </Link>*/}

                        <Link href={'https://drive.google.com/file/d/1IBtXxr6OIyaD7qk8gyB-HHRvSz7npVNP/view?usp=sharing'} >
                            <button className='button-widget bg-transparent hover:bg-neutral-300 text-black border-2 border-black mt-3'>
                                Download Resume
                            </button>
                        </Link>
                    </div>

                </div>

                <div className='col-span-3 place-self-center mt-4 lg:mt=0'>
                    <div className='rounded-full bg-opacity-0 w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative'>
                        <Image
                            src="/images/herosection.png"
                            alt='hero image'
                            //className='absolute transform -translate-x-1/2 -transform-y-1/2 top-1/2 left-1/2'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
