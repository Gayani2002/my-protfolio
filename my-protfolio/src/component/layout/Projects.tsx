"use client"

import { useState } from "react"
import { projects } from "../../constants/projects"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getProjectsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3 // lg screens
      if (window.innerWidth >= 768) return 2 // md screens
      return 1 // sm screens
    }
    return 3 // default for SSR
  }

  const [projectsPerView, setProjectsPerView] = useState(getProjectsPerView)

  useState(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setProjectsPerView(getProjectsPerView())
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  })

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + projectsPerView >= projects.length ? 0 : prev + 1))
  }

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, projects.length - projectsPerView) : prev - 1))
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView)

  return (
    <section  id="Projects" className="py-20 px-4 min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold  text-blue-400 pb-12">Featured Projects</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, UI/UX design,
            and problem-solving.
          </p>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevProjects}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextProjects}
            disabled={currentIndex + projectsPerView >= projects.length}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`,
                width: `${(projects.length * 100) / projectsPerView}%`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / projects.length}%` }}>
                  <div className="group hover:shadow-2xl transition-all duration-300 h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 text-white rounded-lg overflow-hidden">
                   <div className="aspect-video bg-gray-700 overflow-hidden relative">
  <Image
    src={project.image}
    alt={`${project.title} project screenshot`}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
</div>


                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white rounded-md transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-300 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 rounded-full transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / projectsPerView) === index ? "bg-blue-500" : "bg-gray-500"
                }`}
                onClick={() => setCurrentIndex(index * projectsPerView)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
