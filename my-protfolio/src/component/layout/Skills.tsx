import React from 'react';
import { skills } from '../../constants/skills';
import Image from 'next/image';

export default function Skills() {
  // Get animation class based on direction
  const getAnimationClass = (direction: string) => {
    switch (direction) {
      case 'left':
        return 'animate-slide-in-left';
      case 'right':
        return 'animate-slide-in-right';
      case 'bottom':
        return 'animate-slide-in-bottom';
      case 'top':
        return 'animate-slide-in-top';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <section  id="Skills" className="py-20 px-4 min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid - One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(skills).map(([categoryName, categorySkills], categoryIndex) => (
            <div
              key={categoryName}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white mb-8 text-center">
                {categoryName}
              </h3>

              {/* Skills Grid within Category */}
              <div className="grid grid-cols-2 gap-6">
                {categorySkills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`group flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300 cursor-pointer ${getAnimationClass(skill.direction)}`}
                    style={{
                      animationDelay: `${(categoryIndex * categorySkills.length + skillIndex) * 0.1}s`
                    }}
                  >
                    {/* Logo/Icon */}
                    <div className="w-12 h-12 mb-2 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <img 
                       src={`/images/${skill.logo}`} // e.g. skill.logo = "react.png"
                         alt={skill.name} 
                         className="w-10 h-10 object-contain" 
                       />
                      {/* Placeholder for actual logo - you can replace with actual images */}
                     
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-sm font-medium text-blue-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}