"use client"
import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="bg-blue-100 p-5">
      <section className="grid grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-none h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">

          <div className={`text-4xl font-bold ${lato.className}`}>
            <ReactTyped
              strings={["Welcome to Shortify.", "Your URL Shortening Solution."]}
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
            <Link className=' rounded-lg p-2 bg-blue-400' href={"/shorten"}><button>Try Now</button></Link>
            <Link className='rounded-lg p-2 bg-blue-400' href={"/github"}><button>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/interior_office.jpg"} fill={true} />
        </div>

      </section>
    </div>
  );
}
