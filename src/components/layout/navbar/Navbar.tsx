// src/components/layout/navbar/Navbar.tsx
'use client';

import { useState } from 'react';
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar';

// Definicja typu i danych dla linków nawigacyjnych
export type NavLinkData = {
  href: string;
  label: string;
};

const navLinks: NavLinkData[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'O nas' },
  { href: '/gallery', label: 'Galeria' },
  { href: '/news', label: 'Aktualności' },
  { href: '/events', label: 'Wydarzenia' },
  { href: '/contact', label: 'Kontakt' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Podział linków dla widoku desktopowego
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <header className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Komponent dla widoku desktopowego */}
          <DesktopNavbar leftLinks={leftLinks} rightLinks={rightLinks} />
          
          {/* Komponent dla widoku mobilnego */}
          <MobileNavbar
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            navLinks={navLinks}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;