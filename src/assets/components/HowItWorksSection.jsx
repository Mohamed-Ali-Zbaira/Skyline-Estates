import React from 'react';
import { steps, sectionImage } from '../../data/DataHowItWorksSection.js';

const Step = ({ step }) => (
  <div className="flex items-start mb-6">
    <div className="flex items-center justify-center w-8 h-8 mr-4 text-white text-base font-bold bg-amber-400 rounded-lg flex-shrink-0 shadow-md">
      {step.number}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-100 mb-1">{step.title}</h4>
      <p className="text-gray-400 text-sm">{step.description}</p>
    </div>
  </div>
);

export const HowItWorksSection = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex lg:gap-16 items-start">
          
          {/* Image de gauche */}
          <div className="lg:w-3/5 relative h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-2xl mb-10 lg:mb-0">
            <img
              src={sectionImage.src}
              alt={sectionImage.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = sectionImage.fallback;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
          </div>

          {/* Contenu de droite */}
          <div className="lg:w-2/5 p-6 lg:p-0">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-extrabold flex items-center text-white mb-4">
                <span className="text-amber-400 text-5xl mr-3">/</span> How It Works
              </h2>
              <p className="text-gray-400 leading-relaxed mt-2">
                Explore our straightforward process. We guide you from consultation to transaction, ensuring clarity and efficiency in achieving your real estate goals.
              </p>
            </div>
            <div>
              {steps.map((step, index) => (
                <Step key={index} step={step} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
