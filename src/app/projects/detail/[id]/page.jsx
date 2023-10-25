'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/app/components/title'
import { projectsData as data } from '@/app/components/Main'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


// import { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: '...',
//   description: '...',
// }

export default function DetailMovie({ params: { id } }) {
    const dataProject = data[id]
    return (
        <React.Fragment>
            <Title title={dataProject.title} />
            <div className='w-full mt-[100px] flex flex-col px-5 gap-4 sm:px-20 lg:px-40'>
                <h1 className='font-extrabold text-3xl md:text-5xl'>{dataProject.title}</h1>
                <ul className='flex items-center gap-2'>
                            {dataProject.tech?.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                <div className='relative w-full h-48 lg:w-4/6 lg:h-[420px]'>
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        <Image
                            src={dataProject.img}
                            fill={true}
                            // sizes=""
                            className="w-auto h-auto rounded-lg cursor-pointer"
                            alt={`img ${dataProject.title}`}
                            priority={true}
                        />
                    </LightGallery>
                </div>
                <p className='text-gray-300'>{dataProject.desc}</p>
                <div className="flex gap-2 sm:gap-4 mt-2 text-sm md:text-lg">
                    <Link href={dataProject.repository} className='border py-3 px-6 rounded-md border-gray-dark bg-gray2 hover:scale-105 hover:bg-opacity-10 hover:bg-white transition-all sm:px-8'>Repository</Link>
                    <Link href={dataProject.livePreview} className='border py-3 px-6 rounded-md border-gray-dark bg-gray2 hover:scale-105 hover:bg-opacity-10 hover:bg-white transition-all sm:px-8'>Live Preview</Link>
                </div>
            </div>
        </React.Fragment>
    )
}
