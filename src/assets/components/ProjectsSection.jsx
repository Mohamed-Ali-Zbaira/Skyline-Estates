import React from 'react';
import { projects, sectionHeader } from '../../data/ProjectsSection.js';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.02] cursor-pointer">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Project+Image"; 
        }}
      />
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2 text-amber-400">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-4 h-10 overflow-hidden">{project.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-gray-300">Starting Price:</span>
            <span className="font-bold text-amber-400">{project.startingPrice}</span>
          </div>
          <div className="text-xs text-gray-500 italic">{project.paymentPlan}</div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            <span className="text-amber-400 mr-2">/</span> {sectionHeader.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{sectionHeader.subtitle}</p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-amber-400 rounded-lg shadow-xl hover:bg-amber-500 transition duration-300 uppercase tracking-widest"
          >
            Make An Enquiry &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
