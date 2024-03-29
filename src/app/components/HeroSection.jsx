
import React from 'react'
import Image from 'next/image'
import './style.css'
import HeroSectionAnimation from './HeroSectionAnimation.jsx'
import Link from 'next/link'

//rafce
const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hello, I&apos;m
                        <br></br>
                        <HeroSectionAnimation />
                    </h1>
                    <p className='text-neutral-500 mb-6 text-base sm:text-lg lg:text-xl'>
                        Math @ Uwaterloo
                    </p>

                    <div>
                        {/*<Link href={'https://drive.google.com/file/d/1GsPFWzeqQk9DMa3816CuMjXtuyRkujZA/view?usp=drive_link'} >
                            <button className='button-widget bg-black text-white hover:bg-neutral-400'>
                                Download Resume
                            </button>
                        </Link>*/}

                        <Link href={'https://drive.google.com/file/d/1GsPFWzeqQk9DMa3816CuMjXtuyRkujZA/view?usp=drive_link'} >
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
