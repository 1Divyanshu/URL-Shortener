"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-blue-400 text-white'>
      <div className='bg-blue-400 flex justify-between items-center text-white h-20'>
        <div className='logo font-bold text-lg m-4'>
          <Link href={"/"}>Shortify</Link>
        </div>

        {/* <div>
          <button><Image className='invert-100 w-10 mr-3 ' src={"/menu.png"} width={10} height={10}/></button>

        </div> */}

        <button className='mr-3 md:hidden' onClick={() => setOpen(!open)}>
          {open ? "X" : "☰"}
        </button>

        <ul className='hidden md:flex text-white gap-10 p-5 text-lg justify-center items-center'>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/shorten"}><li>Shorten</li></Link>
          <Link href={"/contact"}><li>Contact Us</li></Link>

          <li className='md:flex gap-5 hidden'>
            <Link className='rounded-lg p-2 bg-blue-600' href={"/shorten"}><button className='cursor-pointer'>Try Now</button></Link>
            <Link className='rounded-lg p-2 bg-blue-600' href={"/github"}><button className='cursor-pointer'>GitHub</button></Link>
          </li>
        </ul>
      </div>

        {open && (<ul className='md:hidden flex flex-col text-white gap-10 p-5 text-lg justify-center items-center'>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/shorten"}><li>Shorten</li></Link>
          <Link href={"/contact"}><li>Contact Us</li></Link>


      </ul>)}

    </nav>
  )
}

export default Navbar
