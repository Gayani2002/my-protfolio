'use client'

import SocialMedia from "../static/SocialMedia";
import Typing from "../static/Typing";
import Image from "next/image";

function Welcome() {
    return (
        <div id="Welcome" className="flex items-center justify-center px-4 md:px-20 pt-3 min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white  overflow-hidden">

            <div className="container mx-auto flex flex-col md:flex-row  justify-between gap-12 z-10 py-12">

                {/* Left Content */}
                <div className="flex-1 md:text-left space-y-7">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I'm 
                    </h1>

                    {/* Typing Animation */}
                    <div className="text-4xl text-blue-400 md:text-5xl font-bold ">
                        <Typing />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg  md:text-2xl max-w-3xl mx-auto md:mx-2 pt-5 line-spacing-9">
                        I build exceptional digital experiences with modern technologies. Passionate about creating efficient, scalable, and user-friendly applications.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row  md:justify-start gap-4 pt-10">
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300">
                            View My Work
                        </button>
                        <button className="px-8 py-3 border border-blue-400 text-white hover:bg-blue-400 hover:bg-opacity-20 rounded-full font-medium transition-all duration-300">
                            Contact Me
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex  md:justify-start gap-4 pt-6">
                        <SocialMedia size={24} />
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-2xl group transition-all duration-500">
                        <Image
                            src="/path-to-your-image.jpg"
                            alt="Gayani Madhubhashini"
                            fill
                            className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        {/* Glowing ring */}

                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}

export default Welcome;
