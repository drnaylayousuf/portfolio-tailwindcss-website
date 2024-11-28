import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-[#fbacc1] min-h-screen flex justify-center items-center p-4">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">

        {/* Left Side: Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-center text-[#82cfde] mb-6">CONTACT ME</h2>
          
          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#d789be]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-[#82cfde] rounded-md focus:border-[#cf6ba9] focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#d789be]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-[#82cfde] rounded-md focus:border-[#cf6ba9] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Project Details Input */}
            <div>
              <label htmlFor="project" className="block text-lg font-medium text-[#d789be]">Project Details</label>
              <textarea
                id="project"
                name="project"
                className="w-full p-3 mt-2 border border-[#82cfde] rounded-md focus:border-[#cf6ba9] focus:outline-none"
                placeholder="Tell us about your project"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#d789be] text-white py-3 rounded-md mt-6 hover:bg-[#ba609d] transition mb-6 sm:mb-6"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 sm:mt-6">
          <Image
            src="/2.avif" // Replace with the actual path to your image
            alt="Contact Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}
