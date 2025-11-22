import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative text-center lg:text-left py-16 px-4 sm:px-6 lg:px-8">
      {/* Contenu textuel */}
      <div className="max-w-screen-xl mx-auto z-10 relative">
        <p className="text-gray-400 text-lg md:text-xl uppercase tracking-wider mb-2">
          — Your Trusted Partner in Comprehensive,
        </p>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Real Estate Services
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4">
          <span className="text-amber-400 mr-2">/</span> Ras Al Khaimah and Dubai - Ready and Off-Plan Opportunities Await!
        </p>
      </div>

      {/* L'image principale (utilisant le chemin du dossier public) */}
      <div className="mt-12 max-w-screen-xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        {/* J'utilise le chemin relatif "/images/Dubai.jpg" */}
        <img 
            src="/images/Dubai.jpg" 
            alt="Dubai Skyline and luxury properties" 
            className="w-full h-auto max-h-[500px] object-cover object-center transition duration-500 ease-in-out transform hover:scale-[1.02]"
            // Fallback pour le cas où l'image ne charge pas (même si elle est locale)
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x500/1f2937/ffffff?text=Image+de+Dubai+non+trouvée"; }}
        />
      </div>
    </section>
  );
};
