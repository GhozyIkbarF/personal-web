'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import foto from '../assets/image/myfoto.png'
import { Typewriter } from 'react-simple-typewriter'
import MediaSosial from './MediaSosial'
import Link from 'next/link'

import spotify from '../assets/image/spotify.png';
import todoList from '../assets/image/todoList.png';
import infiniteScroll from '../assets/image/infiniteScroll.png';

export default function Main() {
    return (
        <main className='mt-[80px] overflow-hidden'>
            <Banner />
            <About />
            <Projects />
        </main>
    )
}


const Banner = () => {
    return (
        <div className="relative w-full flex flex-col justify-center items-center min-h-[560px] md:min-h-[730px] text-center gap-5 sm:px-20 lg:px-40 bg-gray1">
            <div className='text-3xl md:text-6xl md:mt-14'>
                <h1 className='font-extrabold font-gochi'>Hi! <span className='font-normal'>i am</span></h1>
                <h1>Ghozy Ikbar Fathoni</h1>
                {/* <span class="transition-colors bg-gradient-to-tr from-primary-300 to-primary-400 bg-clip-text">Clarence</span> */}
            </div>
            <div className='mb-10 text-2xl md:text-3xl'>
                <h1 data-fade="3">I am an fresh graduate Informatics student</h1>
                <h1 data-fade="4">who is interested in <span className='font-gochi underline underline-offset-4'>
                    <Typewriter
                        words={['Web Development','Backend Development', 'Eat', 'Sleep', 'Code', 'Repeat!']}
                        loop={false}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={70}
                        delaySpeed={1000}
                    />
                </span>
                </h1>
            </div>
            <MediaSosial />
            <input type="" id="toggle" className="hidden" pattern='' />
            <Link href={''} className='text-lg border-[1px] border-solid border-current py-3 px-8 rounded-md hover:scale-105 hover:bg-opacity-10 hover:bg-white transition-all'>
                my resume
            </Link>
                <div className='animate-bounce h-16 max-w-fit -left-8 md:left-0 top-3/4 md:-bottom-12 absolute'>
                    <div className='rotate-90'>
                        <p>Scroll down <span></span></p>
                    </div>
                </div>
                <div className='animate-bounce h-16 max-w-fit -right-8 md:right-0 top-3/4 md:-bottom-12 absolute'>
                    <div className='rotate-90'>
                        <p>Scroll down <span></span></p>
                    </div>
                </div>
        </div>
    )
}

const About = () => {
    return (
        <div id='about' className="min-h-[500px] md:min-h-[700px] flex flex-col md:flex-row-reverse gap-6 md:gap-0 justify-center items-center p-5 my-10 sm:px-20 lg:px-40">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
                <Image src={foto} alt="ghozy" className="w-[304px] h-[422px] md:w-[344px] md:h-[462px]" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:pt-16">
                <div className="w-full font-semibold font-gochi text-center md:text-start md:mb-5 text-2xl md:text-3xl">
                    <h1>About Me</h1>
                </div>
                <div className="text-lg text-gray-300 md:text-2xl">
                    <p className='mb-4'>My name is Ghozy Ikbar Fathoni, i am an fresh graduate Informatics student at Muhammadiyah University of Surakarta.</p>
                    <p> I am interested in Web Development, especially Frontend Web Development. I am a hard worker, fast learner, and also a good team player. I am able to work in a team and also able to work independently.</p>
                </div>
            </div>
        </div>
    )
}



const projectsData = [
    {
        title: 'Todo List',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.',
        tech: ['html', 'css', 'js',],
        link: '',
        img: todoList
    },
    {
        title: 'Infinity Scroll',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.',
        tech: ['html', 'css', 'js'],
        link: '',
        img: infiniteScroll,
    },
    {
        title: 'Spotify Clone',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.',
        tech: ['react js'],
        link: '',
        img: spotify,
    },
    {
        title: 'Project 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.',
        tech: ['html', 'css', 'js', 'react'],
        link: '',
        img: '',
    },
]

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);
    const path = usePathname();
    const router = useRouter();
    useEffect(() => {
        const handleResize = () => {
          const mediaQuery = window.matchMedia("(max-width: 900px)");
          if (mediaQuery.matches) {
            setIsMobile(mediaQuery.matches);
            } else {
            setIsMobile(mediaQuery.matches);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const ProjectCard = ({project, index}) => {
        return (
                <div className='w-full max-h-96 flex flex-col gap-1 rounded-lg p-5 bg-black bg-opacity-20 cursor-pointer hover:scale-105 transition-all border-gray-dark' onClick={() => router.push(`/projects/detail/${index}`)}>
                    <h1 className='font-bold text-xl'>{project.title}</h1>
                    <p className='text-gray-300'>{project.desc}</p>
                    <ul className="flex text-gray-300 gap-2">
                        {project.tech?.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <Link href={''} className='w-full mb-1 showcase-preview_preview__HcSHu'>
                        <Image src={project.img} 
                                sizes="(max-width: 300px)"
                                className="rounded-md transition-filter duration-150 ease"
                                layout="responsive"
                                loading="lazy" width="390" height="330" decoding="async"
                                alt={project.title} 
                                />
                    </Link>
                    <h1 className='font-bold text-lg'>See more</h1>
                </div>
        )
      }

    return (
        <div id='projects' className="flex flex-col p-5 my-10 sm:px-20 lg:px-40">
            <h1 className='font-gochi font-black text-4xl md:text-6xl mb-3'>Projects</h1>
            <p className='text-lg text-gray-300 md:text-xl mb-8'>Showcase of my works on frontend development.</p>
            <div className="min-h-min grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {projectsData?.map((project, index) => (
                    isMobile && index < 3 ? 
                         <ProjectCard key={index} project={project} index={index} />
                    : !isMobile && path == '/' && index < 6 ?
                        <ProjectCard key={index} project={project} index={index} />
                    : path == '/projects' ?
                        <ProjectCard key={index} project={project} index={index} />
                    : null
                ))}
            </div>
            {path == '/' ? 
                <div className='mt-8'>
                    <Link href={'/projects'} className='text-lg border py-3 px-8 rounded-md hover:scale-105 hover:bg-opacity-10 hover:bg-white transition-all mt-10'>
                        See More
                    </Link>
                </div> : null
            }
        </div>
    )
}

export { Projects, projectsData }