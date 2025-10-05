import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
   
      <div className='bg-blue-100'>

        <section className='grid grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-none '>
          <div className='mx-auto  bg-blue-200 w-[90vw] md:w-[30vw] my-16 p-8 rounded-2xl flex flex-col gap-6'>
            <input className='p-4 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Name' />
            <input className='p-4 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Email' />
            <textarea className='pt-2 pb-8 px-4 bg-white rounded-lg focus:outline-blue-500 scroll-auto min-h-20' type="text" placeholder='Message' />
            <button className='rounded-lg p-2 mt-3 bg-black text-white cursor-pointer'>Contact Us</button>
          </div>
          <div className='flex justify-start relative'>
            <Image alt='an image of a guy' className='mix-blend-darken' src={"/5118756.jpg"} fill={true} />
          </div>
        </section>


        <svg className=" w-full h-20 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">

          <path fill="#1f2f46" fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,229.3C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L0,320Z">
          </path>
        </svg>



        <div className='bg-[#1f2f46] flex flex-col items-center p-5 text-white h-[23.5vh]'>
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
      </div>
  
  )
}


export default Contact
