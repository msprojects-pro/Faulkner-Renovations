import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MapPin, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { GALLERY_PROJECTS, Project } from '../data';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories extracted from our projects list
  const categories = ['All', 'Media Walls', 'Custom Wardrobes', 'Kitchen Refurbishment', 'Wall Panelling', 'Garage Conversions', 'Made to Measure Storage'];

  // Filter projects based on active selection
  const filteredProjects = activeFilter === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(project => project.category === activeFilter);

  // Navigate lightbox
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? GALLERY_PROJECTS.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === GALLERY_PROJECTS.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue inline-flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5" /> Project Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mt-2">
            Showcase of Our Work
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base font-light">
            Browse through some of our real-life, premium completed renovations in Rotherham. Zoom in on any project to inspect our flawless joinery, fitting, and paint finishes.
          </p>
        </div>

        {/* Filter Categories Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-brand-navy border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid showcasing projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Get the actual absolute index in the original GALLERY_PROJECTS array for the lightbox
              const originalIndex = GALLERY_PROJECTS.findIndex(p => p.id === project.id);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} in ${project.location}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                    {/* Float tag */}
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-navy font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-md shadow-sm">
                      {project.tag}
                    </span>

                    {/* Hover icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Project Info Block */}
                  <div className="p-5 border-t border-gray-50 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="h-3 w-3 text-brand-blue-light" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-base text-brand-navy mt-1.5 group-hover:text-brand-blue transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Dialog Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-dark/95 backdrop-blur-md">
              
              {/* Overlay Backdrop Close Target */}
              <div
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 cursor-default"
              />

              {/* Lightbox Content Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-4xl bg-brand-navy border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Top Bar Controls */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-brand-navy-dark">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-brand-blue-light uppercase">
                      {GALLERY_PROJECTS[lightboxIndex].category}
                    </span>
                    <h3 className="font-display font-bold text-white text-base">
                      {GALLERY_PROJECTS[lightboxIndex].title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="Close lightbox"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Big Image & Nav Controls Container */}
                <div className="relative aspect-[16/10] bg-black flex items-center justify-center group">
                  <img
                    src={GALLERY_PROJECTS[lightboxIndex].image}
                    alt={GALLERY_PROJECTS[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain max-h-[70vh]"
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-brand-navy/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-brand-navy/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Footer Bar with Location */}
                <div className="px-5 py-4 bg-brand-navy-dark border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-brand-blue-light" />
                    <span className="text-white/80 font-medium">Completed in {GALLERY_PROJECTS[lightboxIndex].location}</span>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase bg-brand-blue/20 text-brand-blue-light font-bold px-2 py-1 rounded">
                    Faulkner Workmanship Verified
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
