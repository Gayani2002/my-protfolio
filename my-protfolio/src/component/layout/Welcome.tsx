"use client"

import SocialMedia from "../static/SocialMedia"
import Typing from "../static/Typing"
import Image from "next/image"

function Welcome() {
  return (
    <div
      id="Welcome"
      className="flex  justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-0 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m
            </h1>
            
            {/* Typing Animation */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
              <Typing />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
            I build innovative digital experiences with modern technologies. Passionate about creating efficient,
            scalable, and user-friendly applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <a
    href="/CV.pdf" 
    download="Gayani Madhubhashini.pdf" 
    
  >
            <button className="px-8 py-4 border-2 border-blue-400 text-white cursor-pointer hover:bg-blue-400 hover:bg-opacity-20 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center pt-2">
            <SocialMedia size={28} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-blue-400 text-sm font-medium">Scroll</span>
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Welcome