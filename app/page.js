"use client"
import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/generate');
        const data = await response.json();
        if (data.success) {
          setCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    }

    fetchStats();
  }, []);


  return (
    <div className="bg-blue-100 pt-5">
      <section className="grid grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-none h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">

          <div className={`text-4xl font-bold ${lato.className}`}>
            <ReactTyped
              strings={["Welcome to Shortify", "Your URL Shortening Solution"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
          <p className="text-lg text-center px-2 md:px-0">
            No jhanjhat to login or signup. Just shorten your URL and share
            it with the world
          </p>

          <div className='flex gap-5'>
            <Link className=' rounded-lg p-2 bg-blue-400 cursor-pointer' href={"/shorten"}><button>Try Now</button></Link>
            <Link className='rounded-lg p-2 bg-blue-400 cursor-pointer' href={"/github"}><button>GitHub</button></Link>
          </div>

          <div className="flex gap-3 w-100 text-2xl justify-center items-center ">
            <Image alt="image of a link icon" className="mix-blend-darken" src={"/wired-outline-11-link-unlink-hover-bounce.gif"} width={35} height={35} />
            Links shortened: {count}
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/interior_office.jpg"} fill={true} />
        </div>

      </section>

      <svg className=" w-full h-20 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">

        <path fill="#c7d2fe" fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,229.3C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L0,320Z">
        </path>
      </svg>

      <section className="bg-indigo-200 text-black p-10 flex flex-col items-center h-70">
        <h1 className="text-2xl font-bold">Guide to use:</h1>
        <div className="grid grid-cols-4 justify-center items-center w-full mb-5">

          <div className="col-span-1 flex flex-col justify-self-center items-center bg-[#F5FFFA] rounded-full w-32 h-32 justify-center ">
            <Image className="mix-blend-darken" src={"/click.gif"} alt="a click icon" width={40} height={40} />
            <span>Cick on Try now</span>
          </div >
          <div className="col-span-1 flex flex-col justify-self-center items-center bg-[#F5FFFA] rounded-full w-32 h-32 justify-center ">
            <Image src={"/draft.png"} alt="a paste icon" width={40} height={40} />
            <span>Paste your link</span>
          </div >

          <div className="col-span-1 flex flex-col justify-self-center items-center bg-[#F5FFFA] rounded-full w-32 h-32 justify-center ">
            <Image className="mix-blend-darken" src={"/hair-cut.gif"} alt="a scissor icon" width={50} height={50} />
            <span>Hit on Generate</span>
          </div >

          <div className="col-span-1 flex flex-col justify-self-center items-center bg-[#F5FFFA] rounded-full w-32 h-32 justify-center ">
            <Image className="mix-blend-darken" src={"/success.gif"} alt="image of a guy" width={50} height={50} />
            <span>Huraahhh</span>
          </div >
          <div>

          </div>
        </div>


      </section>
    </div>
  );
}
