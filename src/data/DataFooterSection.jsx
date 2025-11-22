import React from 'react';
import { Linkedin, Instagram, Dribbble } from 'lucide-react';

// --- Icônes SVG de Remplacement (Fallback Icons) ---
const LinkedinIcon = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9h4v12H4zM6 4a2 2 0 100 4 2 2 0 000-4z" /></svg>);
const InstagramIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a4 4 0 100 8m0-8a4 4 0 110-8m-8 8h16M3 6l9-4 9 4v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" /></svg>);
const DribbbleIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.6c-5.412 0-9.8-4.388-9.8-9.8s4.388-9.8 9.8-9.8 9.8 4.388 9.8 9.8-4.388 9.8-9.8 9.8zM2 12h20M7 5l10 14M5 9l14 6" /></svg>);


// --- Constantes de Mapping Lucide-React ---
const lucideIcons = { Linkedin, Instagram, Dribbble };

/**
 * Fonction exportée pour obtenir le composant d'icône approprié.
 * @param {object} socialItem - L'objet de lien social.
 * @returns {React.Component} Le composant d'icône (Lucide ou Fallback SVG).
 */
export const getSocialIconComponent = (socialItem) => {
  return lucideIcons[socialItem.iconName] || socialItem.fallbackIcon;
};

// --- Données de Contenu du Footer ---
export const footerContent = {
  copyright: `\u00a9 ${new Date().getFullYear()} Mohamed Ali Zbaira. All rights reserved.`,
  companyName: "Skyline-Estates-ae", // Utilisé pour les aria-labels
};

export const socialLinks = [
  {
    iconName: 'Linkedin',
    href: 'https://linkedin.com/company/Skyline-Estates-ae',
    fallbackIcon: LinkedinIcon,
  },
  {
    iconName: 'Instagram',
    href: 'https://instagram.com/Skyline-Estates.ae',
    fallbackIcon: InstagramIcon,
  },
  {
    iconName: 'Dribbble',
    href: '/',
    fallbackIcon: DribbbleIcon,
  },
];