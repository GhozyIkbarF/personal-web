'use client'
import React from 'react'
import Image from 'next/image'
import { projectsData as data } from '@/app/components/Main'
export default function DetailMovie({ params: { id } }) {
    const dataProject = data[id]
    console.log(dataProject);
  return (
    <div className='w-full mt-[90px] flex flex-col px-5 sm:px-20 lg:px-40'>
        <div className='relative w-full h-80 max-h-full md:h-96 lg:h-[550px] xl:h-[650px]'>
            <Image 
                src={dataProject.img}
                fill={true}
                sizes="(max-width: 900px)"
                className="rounded-lg"
                alt={`img ${dataProject.title}`}
                priority={true}
            />
        </div>
        <div className='flex flex-col'>
            <h1 className='font-extrabold text-2xl'>fgf</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consequatur!</p>
            <div className='flex items-center'>
                <h1 className='font-bold text-lg'>Tech: </h1>
                <ul className='flex items-center gap-2'>
                    {dataProject.tech?.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
