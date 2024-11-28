"use client";
import Link from "next/link";
import "./projects.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100); // Delay to allow the component to mount before starting the animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {/* First background image section */}
            <div 
                className="bg-cover bg-center min-h-screen relative"
                style={{ backgroundImage: "url('/projectbg.jpg')" }}
            >
              <h1
           className={`absolute top-20 left-1/2 transform -translate-x-1/2 text-[#DB7093] font-extrabold 
           text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            ${fadeIn ? 'fade-in-delay-1' : 'opacity-0'}
          `}
           >
            MY PROJECTS
            </h1>


                {/* About my projects text with delayed fade-in */}
                <p 
    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl text-center ${fadeIn ? 'fade-in-delay-2' : 'opacity-0'}`}
>
    Here are some of the projects I have worked on. Each project showcases a unique set of skills and technologies used to solve real-world problems.
</p>

            </div>

            {/* Second background image section with flex container */}
            <div className="bg-cover bg-center max-h-96 relative">
            <div className="absolute   bg-[#b5c7eb] top-1/4 left-1/2 transform -translate-x-1/2 w-full px-4 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
  {/* First Card */}
  <div className="flex justify-center items-center mt-4 w-full sm:w-1/2  md:w-1/3 lg:w-1/4  ">
    <Link href="https://icecream-station-website.vercel.app/">
      <div className="flex justify-center items-center relative">
        <Image
          src="/laptop1.jpg"
          alt="Ice Cream Station Website"
          className="object-cover rounded-lg border-4 border-white shadow-lg w-full h-auto"
          height={350}
          width={450}
        />
        <Image
          src="/1.jpg"
          alt="Second Image"
          className="absolute mb-12 ml-9 object-cover opacity-60 rounded-lg"
          width={140}
          height={140}
        />
        <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2 rounded-b-lg">
          <p className="text-lg font-bold">Ice Cream Station</p>
        </div>
      </div>
    </Link>
  </div>

  {/* Second Card */}
  <div className="flex justify-center items-center mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-200">
    <Link href="https://assignment-of-signin-and-login.web.app/login.html">
      <div className="flex justify-center items-center relative">
        <Image
          src="/laptop1.jpg"
          alt="Login Signin Form"
          className="object-cover rounded-lg border-4 border-white shadow-lg w-full h-auto"
          height={350}
          width={450}
        />
        <Image
          src="/2.jpg"
          alt="Signin Form"
          className="absolute mb-12 ml-9 object-cover opacity-60 rounded-lg"
          width={140}
          height={140}
        />
        <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2 rounded-b-lg">
          <p className="text-lg font-bold">Login Signin Form UI/UX</p>
        </div>
      </div>
    </Link>
  </div>

  {/* Third Card */}
  <div className="flex justify-center items-center mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-200">
    <Link href="https://my-website-2-sage.vercel.app/">
      <div className="flex justify-center items-center relative">
        <Image
          src="/laptop1.jpg"
          alt="Jewelry Website"
          className="object-cover rounded-lg border-4 border-white shadow-lg w-full h-auto"
          height={350}
          width={450}
        />
        <Image
          src="/3.jpg"
          alt="Jewelry Website"
          className="absolute mb-12 ml-9 object-cover opacity-60 rounded-lg"
          width={140}
          height={140}
        />
        <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2 rounded-b-lg">
          <p className="text-lg font-bold">My Jewelry Website</p>
        </div>
      </div>
    </Link>
  </div>

  {/* Fourth Card */}
  <div className="flex justify-center items-center mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-200">
    <Link href="">
      <div className="flex justify-center items-center relative">
        <Image
          src="/laptop1.jpg"
          alt="Furniture Website"
          className="object-cover rounded-lg border-4 border-white shadow-lg w-full h-auto"
          height={350}
          width={450}
        />
        <Image
          src="/"
          alt=""
          className="absolute mb-12 ml-9 object-cover opacity-60 rounded-lg"
          width={140}
          height={140}
        />
        <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2 rounded-b-lg">
          <p className="text-lg font-bold"></p>
        </div>
      </div>
    </Link>
  </div>
</div>



            </div>
        </div>
    );
}
