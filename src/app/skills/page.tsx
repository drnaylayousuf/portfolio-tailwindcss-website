"use client";
import Hamburger from "@/components/hamburger";
import Image from "next/image";
import { useState } from "react";

export default function Skills() {
    const [showSkills, setShowSkills] = useState(false);

    const handleClick = () => {
        setShowSkills(true);  // Show the skill cards when the image is clicked
    };

    return (
        <div className="h relative bg-cover bg-center h-screen " style={{ backgroundImage: "url('/skillsbg2.jpg')" }}>

            {/* Hamburger Menu (fixed to the top-right corner) */}
            <div className="absolute top-4 right-4 z-20 ">
                <Hamburger />
            </div>

            {/* Skills Heading */}
            <div className="flex flex-col items-center justify-start h-full z-10 pt-16">
                <h2 className="text-4xl font-bold text-white mb-8 transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-transparent bg-clip-text">
                    My Skills
                </h2>

                {/* Image with Rounded Shape and adjusted margin */}
                <div className=" mb-8 mt-12 "> {/* Added mt-8 for margin-top */}
                    <div className="flex justify-center ">
                        <Image
                            src="/1.avif" // Replace with the actual path to your image
                            alt="Skill Image"
                            width={300}  // Set the desired width
                            height={300} // Set the desired height
                            className="rounded-full transform transition-all duration-300 hover:scale-110 hover:opacity-80 hover:border-4 hover:border-pink-500 cursor-pointer"
                            onClick={handleClick} // Handle click event
                        />
                    </div>
                </div>

                {/* Render Skill Cards if the image is clicked */}
                {showSkills && (
             <div className=" mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
             {/* <!-- Skill Card for HTML --> */}
             <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-pink-400 hover:to-pink-600">
                 <h3 className="text-2xl font-semibold text-center text-white">HTML</h3>
             </div>
             
             {/* <!-- Skill Card for CSS --> */}
             <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-400 hover:to-blue-600">
                 <h3 className="text-2xl font-semibold text-center text-white">CSS</h3>
             </div>
             
             {/* <!-- Skill Card for JavaScript --> */}
             <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-yellow-400 hover:to-yellow-600">
                 <h3 className="text-2xl font-semibold text-center text-white">JavaScript</h3>
             </div>
             
             {/* <!-- Skill Card for TypeScript --> */}
             <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-700 hover:to-blue-800">
                 <h3 className="text-2xl font-semibold text-center text-white">TypeScript</h3>
             </div>
             
             {/* <!-- Skill Card for Node.js --> */}
             <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-400 hover:to-green-600">
                 <h3 className="text-2xl font-semibold text-center text-white">Node.js</h3>
             </div>
             
             {/* <!-- Skill Card for Tailwind CSS --> */}
             <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-teal-400 hover:to-teal-600">
                 <h3 className="text-2xl font-semibold text-center text-white">Tailwind CSS</h3>
             </div>
         </div>
         
             
                )}
            </div>
        </div>
    );
}





















































































































// import Hamburger from "@/components/hamburger";
// import "./skills.css"; // Ensure this file contains your custom CSS
// import Image from "next/image";

// export default function Skills() {
//     return (
//         <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/skillsbg2.jpg')" }}>
            
//             {/* Hamburger Menu (fixed to the top-right corner) */}
//             <div className="absolute top-4 right-4 z-20">
//                 <Hamburger />
//             </div>

        
            

//             // <div className="flex items-center justify-center h-full">
// // <div className="flex flex-col w-3/4 h-1/2 bg-transparent shadow-lg rounded-lg sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
// //     {/* Left Side: Heading */}
// //     <div className="flex justify-center items-center w-full p-2 sm:text-2xl">
// //         <h1 className="text-blue-400 sm:mt-1 text-2xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-fade-pulse">
// //             My Skills
// //         </h1>
// //     </div>
// //     {/* Right Side: Paragraph */}
// //     <div className="flex justify-center items-center w-full p-6 sm:text-lg sm:h-56">
// //         <p className="mt-4 text-base md:text-xl sm:text-base text-white text-clip animate-slide-in duration-700">
// //             As a web developer, I have honed a diverse set of skills that enable me to create dynamic and responsive web applications.
// //             My expertise spans front-end development, ensuring a seamless user experience and robust functionality.
// //         </p>
// //     </div>
// // </div>
// // </div>

// // {/* Cards Section */}
// // <div className="flex flex-wrap justify-center w-3/4 mx-auto mt-6 bg-[#b5c7eb] sm:w-11/12 lg:w-3/4 xl:w-1/2">
// // {/* Card 1 - HTML */}
// // <div className="flex flex-col items-center bg-green-200 shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 hover:bg-pink-400 hover:border-2 hover:border-[#003366] duration-300">
// //     <Image src="/html.png" alt="HTML" className="mb-2 mt-2" width={90} height={90} />
// //     <p className="text-lg text-pink-400 font-bold">HTML</p>
// // </div>

// // {/* Card 2 - CSS */}
// // <div className="flex flex-col items-center bg-green-200 shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 hover:bg-pink-400 hover:border-2 hover:border-pink-300 duration-300">
// //     <Image src="/css.png" alt="CSS" className="mb-2 mt-2" width={90} height={90} />
// //     <p className="text-lg text-pink-400 font-bold">CSS</p>
// // </div>

// // {/* Card 3 - JavaScript */}
// // <div className="flex flex-col items-center bg-green-200 shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 hover:bg-pink-400 hover:border-2 hover:border-pink-300 duration-300">
// //     <Image src="/js.png" alt="JavaScript" className="mb-2 mt-2" width={90} height={90} />
// //     <p className="text-lg text-pink-400 font-bold">JavaScript</p>
// // </div>

// // {/* Card 4 - TypeScript */}
// // <div className="flex flex-col items-center bg-green-200 shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 hover:bg-pink-400 hover:border-2 hover:border-pink-300 duration-300">
// //     <Image src="/typescript.png" alt="TypeScript" className="mb-2 mt-2" width={90} height={90} />
// //     <p className="text-lg text-pink-400 font-bold">TypeScript</p>
// // </div>

// // {/* Card 5 - Tailwind CSS */}
// // <div className="flex flex-col items-center bg-green-200 shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 hover:bg-pink-400 hover:border-2 hover:border-pink-300 duration-300">
// //     <Image src="/tailwind.png" alt="Tailwind CSS" className="mb-2 mt-2" width={90} height={90} />
// //     <p className="text-lg text-pink-400 font-bold">Tailwind CSS</p>
// // </div>

// // {/* Card 6 - Shadcn/UI */}
// // <div className="flex flex-col items-center bg-green-200 shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 hover:bg-pink-400 hover:border-2 hover:border-pink-300 duration-300">
// //     <Image src="/nextjs-icon.png" alt="Shadcn/UI" className="mb-2 mt-2" width={90} height={90} />
// //     <p className="text-lg text-pink-400 font-bold">Shadcn/UI</p>
// // </div>
// // </div>




//         </div>
//     );
// }













