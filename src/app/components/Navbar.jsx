'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => { setIsScrollingUp(false) }, []);

  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY;

        if (position < 20) {
          setIsScrollingUp(false);
        } else if (position < currentPosition) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }
        setCurrentPosition(position);
      };

      // Attach the scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);

      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentPosition]);
  return (
    <nav className={`h-[70px] md:h-[80px] w-full flex justify-between items-center px-5 sm:px-24 lg:px-40 z-50 fixed transition-all ${isScrollingUp || currentPosition < 68 ? 'top-0 bg-black bg-opacity-90' : 'top-[-68px]'}`}>
      <Link href={'/'} className='text-2xl font-gochi font-bold'>ghozy.</Link>
      <ul className=" flex text-md md:text-xl gap-4 md:gap-6">
        <li><Link href={'#projects'} className='group'>Projects</Link></li>
        <li><Link href={'#experience'} className='group'>Experience</Link></li>
        <li><Link href={'#about'} className='group'>About</Link></li>
      </ul>

    </nav>
  )
}
