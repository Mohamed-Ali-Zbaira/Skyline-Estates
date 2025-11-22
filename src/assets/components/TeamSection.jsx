import React from 'react';
import { teamMembers, sectionHeader } from '../../data/DataTeamSection.js';

const TeamCard = ({ member }) => (
  <div  className="text-center group">
    <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-md transition duration-300 group-hover:shadow-xl">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
        onError={(e) => { e.target.onerror = null; e.target.src = member.fallback; }}
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
    <p className="text-sm text-gray-500 font-medium">{member.title}</p>
  </div>
);

export const TeamSection = () => (
  <section id="team" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-screen-xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold flex items-center text-gray-900 mb-4">
          <span className="text-amber-400 text-5xl mr-3">/</span> {sectionHeader.title}
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">{sectionHeader.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  </section>
);
