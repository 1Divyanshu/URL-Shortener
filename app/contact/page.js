import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
      <div className='bg-blue-100'>
        <section className='grid grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-none '>
          <div className='mx-auto  bg-blue-200 w-[90vw] md:w-[30vw] my-16 p-8 rounded-2xl flex flex-col gap-4'>
            <input className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Name' />
            <input className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Email' />
            <textarea className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500 scroll-auto min-h-20' type="text" placeholder='Message' />
            <button className='rounded-lg p-2 mt-3 bg-black text-white cursor-pointer'>Contact Us</button>
          </div>
          <div className='flex justify-start relative'>
            <Image alt='an image of a guy' className='mix-blend-darken' src={"/5118756.jpg"} fill={true} />
          </div>
        </section>
      </div>
      <div className='bg-slate-700 flex flex-col items-center p-5 text-white h-[23.5vh]'>
        <h1 className='font-bold text-xl mb-2'>Find us on:</h1>
        <div className='grid grid-cols-3  gap-14 mx-5 relative h-10 '>
          <Link href={"https://www.instagram.com/divyanshu.shekhar_bhatt?igsh=MW1zbXJvbnZ1a3M5eg=="} target='_blank' className='col-span-1 justify-center items-center flex flex-col cursor-pointer h-20'>
            <Image className='w-10 h-10 hover:w-11 hover:h-11' alt='an image of instagram logo' src={"/Instagram Logo.png"} width={30} height={4} />
            <span className='hover:underline'>Instagram</span>
          </Link>
          <Link href={"https://www.linkedin.com/in/divyanshu-shekhar-bhatt-7b5410368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank' className='col-span-1 justify-center items-center flex flex-col cursor-pointer h-20'>
            <Image className='w-10 h-10 hover:w-11 hover:h-11' alt='an image of linkdin logo' src={"/Linkedin_logo.png"} width={30} height={4} />
            <span className='hover:underline'>Linkedin</span>
          </Link>
          <Link href={"https://github.com/1Divyanshu"} target='_blank' className='col-span-1 justify-center items-center flex flex-col cursor-pointer h-20'>
            <Image className='w-10 h-10 hover:w-11 hover:h-11 rounded-md' alt='an image of github logo' src={"/GitHub_logo.jpg"} width={30} height={4} />
            <span className='hover:underline'>GitHub</span>
          </Link>
        </div>
        <div className='text-sm md:text-base flex flex-col md:flex md:flex-row items-center justify-around w-full  md:w-1/2 h-10 mt-10 '>
          <span>© 2025 Shortify. All rights reserved.</span>
          <span className='flex justify-center items-center text-white '>
           Made with ❤️ by Divyanshu Shekhar Bhatt
          </span>
        </div>
      </div>
    </>
  )
}


export default Contact
