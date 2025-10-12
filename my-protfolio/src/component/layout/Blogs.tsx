"use client";

import { useState, useEffect } from "react";
import { blogs } from "../../constants/blogs";
import { ExternalLink, ChevronLeft, ChevronRight, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerPage(3);
      else if (width >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Reset current index when items per page changes
  useEffect(() => {
    const maxIndex = Math.max(0, Math.ceil(blogs.length / itemsPerPage) - 1);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, currentIndex]);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const canNavigate = totalPages > 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="Projects" className="py-12 md:py-20 px-4 min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-4">Latest Blogs</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Thoughts, ideas, and writings from my experiences and learning journey.
          </p>
        </div>

        <div className="relative">
          {canNavigate && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 text-white p-2 md:p-3 rounded-full transition-all shadow-lg"
                aria-label="Previous projects"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 text-white p-2 md:p-3 rounded-full transition-all shadow-lg"
                aria-label="Next projects"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}

          <div className="overflow-hidden mx-2 md:mx-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-2"
                >
                  {blogs
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((blog, blogIndex) => (
                      <div
                        key={`${pageIndex}-${blogIndex}`}
                        className="group h-full"
                      >
                        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl">
                          <div className="aspect-video bg-gray-700 relative h-56 overflow-hidden">
                            <Image
                              src={blog.image}
                              alt={`${blog.title} `}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-70" />
                          </div>

                          <div className="p-6">
                            {/* Blog title and description moved here from the image overlay */}
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                {blog.title}
                              </h3>
                              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                {blog.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              {blog.link !== "#" && (
                                <a
                                  href={blog.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium"
                                >
                                  Read on Medium
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {canNavigate && (
            <div className="flex justify-center mt-12 gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                      : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}