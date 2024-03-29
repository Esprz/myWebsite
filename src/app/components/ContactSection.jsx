import React from 'react'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import DevpostIcon from "../../../public/devpost-icon.svg";
import Link from 'next/link'
import Image from 'next/image'

const ContactSection = () => {
    return (
        <section className='grid my-12 md:my-12 py-24 gap-4 justify-center'
        id="contact">
            <div>
                <h5 className='section-title'>
                    Contact
                </h5>
                <div className='socials flex flex-row gap-5 items-center'>
                    <Link href={"https://github.com/Esprz"} >
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/siyuan-zhao-esprz/"}>
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                    <Link href={"https://devpost.com/siyuan-zhao-syesprz/"}>
                        <Image src={DevpostIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
