"use client"

import SocialMedia from "../static/SocialMedia"
import Typing from "../static/Typing"
import Image from "next/image"

function Welcome() {
  return (
    <div
      id="Welcome"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
    
         

        
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl order-2 lg:order-1">
            {/* Heading */}
      
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Hi, I'm</h1>

              {/* Typing Animation */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
                <Typing />
              </div>
      

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
              I build exceptional digital experiences with modern technologies. Passionate about creating efficient,
              scalable, and user-friendly applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-white hover:bg-blue-400 hover:bg-opacity-20 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start pt-2">
              <SocialMedia size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - perfectly centered */}
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
