import Image from "next/image";

function About() {
  return (

      <section  id="About" className="py-20 px-4 min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto" id="About">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            I'm an IT undergraduate at the University of Moratuwa with a strong interest in software development and technology.
            I enjoy solving problems through logical thinking and take pride in creating efficient, practical solutions.
          </p>
           <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          My academic journey has enhanced my critical thinking skills and taught me how to approach tasks with clarity and creativity.
            I also value teamwork and have gained experience working in collaborative environments where communication and shared effort lead to better outcomes.
            I'm always eager to learn new tools, take on new challenges, and grow as a developer.
          </p>
        </div>
        </div>
    </section>











  );
}

export default About;
