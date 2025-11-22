import React from "react";
import { services, sectionHeader } from "../../data/DataServicesSection.jsx";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
      <div className="flex justify-start mb-4">
        <Icon className="w-8 h-8 text-gray-900" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">

        {/* En-tête de section */}
        <div className="lg:flex lg:gap-16 items-start mb-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center text-gray-900 mb-4">
              <span className="text-amber-400 text-4xl mr-3">/</span> {sectionHeader.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{sectionHeader.description}</p>
          </div>

          <div className="lg:w-2/3 mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.slice(2, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}

          <div className="flex items-center justify-center lg:justify-end">
            <a href="#contact"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gray-900 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300 uppercase tracking-widest text-center">
              Make An Enquiry &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
