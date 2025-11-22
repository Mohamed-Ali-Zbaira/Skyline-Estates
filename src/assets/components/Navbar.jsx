import React, { useState } from 'react'

export const Navbar = () => {
  // 1. État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4">
      {/* NAV: transparent, arrondi et flottant */}
      <nav className="py-2.5 bg-transparent rounded-xl">

        {/* DIV interne: bg-white/10 (gris semi-transparent) et backdrop-blur-md (flou d'arrière-plan) */}
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto bg-white/10 backdrop-blur-md rounded-xl p-3">

          <a href="#" className="flex items-center">
            {/* L'image de logo est simulée ici */}
            {/* Utilisation d'un SVG de base pour simuler un logo simple et élégant */}
          <img src="/logo.png" className="h-6 mr-3 sm:h-9" alt="DubaiCompany Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Skyline Estates</span>
          </a>

          {/* Conteneur de droite (Bouton CTA + Menu Burger) */}
          <div className="flex items-center lg:order-3">

            {/* Bouton CTA - Visible uniquement sur grand écran. Utilisation de la couleur Or (amber-400) */}
            <a href="#contact"
              // Changement ici : bg-amber-400 pour l'accentuation Or. Le texte est noir pour le contraste.
              className="hidden lg:block text-gray-900 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none focus:ring-amber-800 transition duration-150 ease-in-out shadow-lg">
              Contactez-nous
            </a>

            {/* 2. Bouton du menu mobile qui appelle toggleMenu */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" // focus ring en Or
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>

              {/* Icônes Burger et X - Couleur blanche maintenue pour le contraste */}
              <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          {/* Conteneur des liens de navigation (MAIN MENU) */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-2`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#"
                  // Le lien actif est en Or
                  className="block py-2 pl-3 pr-4 text-amber-400 rounded lg:bg-transparent lg:text-amber-400 lg:p-0"
                  aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}
                  // Hover et focus en Or (amber-400)
                  className="block py-2 pl-3 pr-4 text-white border-b border-white/20 hover:bg-white/20 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-400 lg:p-0 transition duration-150 ease-in-out">About</a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMenuOpen(false)}
                  // Hover et focus en Or (amber-400)
                  className="block py-2 pl-3 pr-4 text-white border-b border-white/20 hover:bg-white/20 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-400 lg:p-0 transition duration-150 ease-in-out">Services</a>
              </li>

              <li>
                <a href="#team" onClick={() => setIsMenuOpen(false)}
                  // Hover et focus en Or (amber-400)
                  className="block py-2 pl-3 pr-4 text-white border-b border-white/20 hover:bg-white/20 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-400 lg:p-0 transition duration-150 ease-in-out">Team</a>
              </li>

              {/* Le lien Contact, désormais visible sur desktop et mobile dans la liste */}
              <li className="lg:hidden">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}
                  // Hover et focus en Or (amber-400)
                  className="block py-2 pl-3 pr-4 text-white border-b border-white/20 hover:bg-white/20 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-400 lg:p-0 transition duration-150 ease-in-out">Contact</a>
              </li>

            </ul>

            {/* Bouton CTA pour mobile (visible uniquement lorsque le menu est ouvert sur les petits écrans) */}
            <div className="lg:hidden mt-4 pb-2">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}
                // Changement ici : bg-amber-400
                className="block text-center w-full text-gray-900 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 font-bold rounded-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-amber-800 transition duration-150 ease-in-out shadow-lg">
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
