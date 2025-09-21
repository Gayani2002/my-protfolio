function About() {
  return (
    <section 
      id="About" 
      className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>

          <div className="max-w-5xl mx-auto space-y-6 mt-20">
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m an IT undergraduate at the University of Moratuwa with a strong 
              interest in software development and technology. I enjoy solving 
              problems through logical thinking and take pride in creating efficient, 
              practical solutions.
            </p>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              My academic journey has enhanced my critical thinking skills and taught 
              me how to approach tasks with clarity and creativity. I also value 
              teamwork and have gained experience working in collaborative environments 
              where communication and shared effort lead to better outcomes. I&apos;m always 
              eager to learn new tools, take on new challenges, and grow as a developer.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 text-center mt-10">
              <div>
                <h3 className="text-5xl font-bold text-blue-400">4+</h3>
                <p className="text-1xl md:text-3xl font-bold  mb-4">Projects</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-blue-400">10+</h3>
                <p className="text-1xl md:text-3xl font-bold mb-4">Technologies</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
