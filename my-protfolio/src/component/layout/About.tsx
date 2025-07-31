import Image from "next/image";

function About() {
  return (
    <div
      id="About"
      className="flex items-center justify-center px-4 md:px-20 pt-3 min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white  overflow-hidden"
    >

       <div className="container mx-auto flex flex-col md:flex-row  justify-between gap-12 z-10 ">


      {/* Left Side - Text */}
            <div className="flex flex-col space-y-6 w-full ">
                <h2 className="text-3xl md:text-5xl font-bold  text-blue-400 pb-12">About Me</h2>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl line-spacing-20">
                I'm an IT undergraduate at the University of Moratuwa with a strong interest in software development and technology.
                I enjoy solving problems through logical thinking and take pride in creating efficient, practical solutions.
                </p>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                My academic journey has enhanced my critical thinking skills and taught me how to approach tasks with clarity and creativity.
                I also value teamwork and have gained experience working in collaborative environments where communication and shared effort lead to better outcomes.
                I'm always eager to learn new tools, take on new challenges, and grow as a developer.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="mt-10 md:mt-0 md:ml-10">
                <Image
                src="/images/aboutme.png" 
                alt="About Gayani"
                width={350}
                height={350}
                className="rounded-xl border-4 border-white shadow-lg object-cover"
                />
            </div>
      </div>
    </div>
  );
}

export default About;
