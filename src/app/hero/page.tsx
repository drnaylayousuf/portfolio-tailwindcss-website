"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // You can use react-icons for easy SVG icons.
import Image from "next/image";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/herobg.webp')" }}>
      {/* Add the background image */}
      <Image
        src="/hero-front.png"
        alt="Background Image"
        className="absolute hidden md:block top-0 right-50 w-2/5 h-auto object-cover opacity-50"
        style={{ transform: 'translateX(30%)' }}
        width={320}
        height={300}
      />

      {/* Links Section on the Left Side for Large Screens */}
      <div className="md:absolute hidden md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 md:pl-8 md:flex md:flex-col md:items-start md:space-y-4">
        <Link href="/" className="relative group flex items-center">
          <Image src="/home.png" alt="Home" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" width={32} height={32} />
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">Home</span>
        </Link>
        <Link href="/projects" className="relative group flex items-center">
          <Image src="/2project.png" alt="Projects" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" width={32} height={32} />
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">Projects</span>
        </Link>
        <Link href="/skills" className="relative group flex items-center">
          <Image src="/1skill.png" alt="Skills" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" width={32} height={32} />
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">Skills</span>
        </Link>
        <Link href="/contact" className="relative group flex items-center">
          <Image src="/1contact.png" alt="Contact" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" width={32} height={32} />
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">Contact</span>
        </Link>
        <Link href="https://github.com/drnaylayousuf?tab=repositorie" className="relative group flex items-center" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" width={32} height={32} />
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/naila-yousuf-16a2562ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="relative group flex items-center" target="_blank" rel="noopener noreferrer">
          <Image src="/link.png" alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" width={32} height={32} />
          <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">LinkedIn</span>
        </Link>
      </div>

      {/* Heading Section on the Right Side */}
      <div className="absolute top-72 right-0 transform -translate-y-1/2 pr-4 md:pr-8 flex flex-col items-start space-y-4">
        <h1 className="ml-2 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text fade-in-right delay-0">
          Hello, I am <span className="gradient-text">NAYLA</span>
        </h1>

        <div className="flex flex-col">
          <h3 className="text-[#fff] font-bold text-lg sm:text-xl md:text-2xl mb-2 fade-in-right delay-1 ml-2">
            I am a Front and Back End Developer
          </h3>
          <div className="max-w-md">
            <p className="text-[#fff] text-sm sm:text-base md:text-lg mt-2 ml-2 fade-in-right delay-2 text-left">
              I am a dedicated developer with a passion for creating innovative solutions. I thrive in collaborative environments and continuously seek to enhance my skills. My goal is to build applications that improve user experiences and solve real-world problems.
            </p>

            <button className="bg-pink-400 mt-3 w-36 h-12 rounded-[50px] border border-pink-400 text-blue-500 hover:bg-pink-900 hover:text-white transition duration-300 block mx-auto fade-in-right delay-3">
              <Link href="/projects">My Projects</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Icons */}
      <footer className=" md:hidden absolute bottom-4 w-full flex justify-center items-center space-x-6">
  <Link href="https://github.com/drnaylayousuf?tab=repositories" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-blue-500 text-3xl transition-colors duration-300 hover:text-pink-400" />
  </Link>
  <Link href="https://www.linkedin.com/in/naila-yousuf-16a2562ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-blue-500  text-3xl transition-colors duration-300  hover:text-pink-400" />
  </Link>
  <Link href="mailto:naylayousuf@gmail.com" target="_blank" rel="noopener noreferrer">
    <FaEnvelope className="text-blue-500  text-3xl transition-colors duration-300 hover:text-pink-400" />
  </Link>
</footer>

    </div>
  );
}
