import Image from 'next/image';
import './styles.css'; // Import your custom CSS file
import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaProjectDiagram } from 'react-icons/fa'; // Import icons

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#adebb3] relative">
      {/* Circle Container */}
      <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 rounded-full border-4 border-gray-300 flex justify-center items-center relative">
        
        {/* Image Inside Circle */}
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <Link href="/hero">
            <Image 
              src="/world2.png" // Replace with your image path
              alt="Description of image"
              width={460} // Set your desired width (adjusted for large screens)
              height={400} // Set your desired height (adjusted for large screens)
              className="w-full h-full object-cover absolute animate-spin-earth"
            />
          </Link>
        </div>

       {/* Navigation Links Around the Circle */}
<Link href="/hero" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 sm:-translate-y-24 text-[#00bb77] text-3xl sm:text-4xl">
  <FaHome />
</Link>

<Link href="/contact" className="absolute right-0 top-1/2 transform translate-x-12 sm:translate-x-24 -translate-y-1/2 text-[#40e0d0] text-3xl sm:text-4xl">
  <FaUser />
</Link>

<Link href="/skills" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 sm:translate-y-24 text-[#40e0d0] text-3xl sm:text-4xl">
  <FaCode />
</Link>

<Link href="/projects" className="absolute left-0 top-1/2 transform -translate-x-12 sm:-translate-x-24 -translate-y-1/2 text-[#40e0d0] text-3xl sm:text-4xl">
  <FaProjectDiagram />
</Link>

      </div>

     {/* Main Heading */}
     <h1 className="text-3xl sm:text-4xl font-bold text-center absolute text-white opacity-0 transform translate-y-8 animate-fadeInText transition-all duration-1000 ease-in-out delay-800">
        Welcome to my Portfolio
      </h1>
    </div>
  );
};

export default Page;
