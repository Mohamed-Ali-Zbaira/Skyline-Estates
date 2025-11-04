import React from 'react';
// Chemin corrigé et importation de toutes les données et de la fonction utilitaire
import { socialLinks, footerContent, getSocialIconComponent } from "../../data/DataFooterSection.jsx"; 

const SocialLink = ({ socialItem }) => {
  const Icon = getSocialIconComponent(socialItem);

  return (
    <a
      href={socialItem.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-amber-400 transition duration-300"
      aria-label={`Lien vers ${socialItem.iconName}`}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};

export const FooterSection = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Partie Gauche : Copyright */}
        <p className="text-gray-400 mb-4 md:mb-0">
          {footerContent.copyright}
        </p>

        {/* Partie Droite : Réseaux Sociaux */}
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} socialItem={link} />
          ))}
        </div>

      </div>
    </footer>
  );
};
export default FooterSection;