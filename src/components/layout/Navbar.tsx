'use client';

import { useState } from 'react';
import NavigationLink from '@/components/NavigationLink';
import Logo from '@/components/Logo';
import Button from '@/components/Button';

// Definicja typu i danych dla linków nawigacyjnych
type NavLinkData = {
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

  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <header className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          {/* ============================================= */}
          {/* WIDOK DESKTOPOWY                               */}
          {/*===============================================*/}
          <div className="hidden lg:flex w-full items-center">
            {/* Sekcja lewych linków */}
            <div className="flex-1 flex justify-start lg:space-x-1 xl:space-x-2">
              {leftLinks.map((link) => (
                <NavigationLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Logo renderowane jako link (domyślne zachowanie) */}
            <Logo className="lg:text-3xl xl:text-4xl" />

            {/* Sekcja prawych linków i przycisku */}
            <div className="flex-1 flex justify-end items-center lg:space-x-1 xl:space-x-2">
              {rightLinks.map((link) => (
                <NavigationLink key={link.href} href={link.href} label={link.label} />
              ))}
              <Button
                as="link"
                href="https://patronite.pl/stowarzyszeniemaxime"
                target="_blank"
                rel="noopener noreferrer"
                variant='secondary'
                className="ml-4 px-5 py-2 text-sm"
              >
                Wesprzyj nas
              </Button>
            </div>
          </div>

          {/* =========================================== */}
          {/* NAGŁÓWEK MOBILNY                            */}
          {/* ========================================= */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <Logo className="text-4xl pl-1.5" />
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ============================================== */}
        {/* ROZWIJANE MENU MOBILNE                         */}
        {/*===============================================*/}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 flex flex-col items-center">
            <Button
              as="link"
              href="https://patronite.pl/stowarzyszeniemaxime"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              variant='secondary'
              className="w-full mt-2 px-5 py-3 text-base"
            >
              Wesprzyj nas
            </Button>
            {navLinks.map((link) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={closeMenu}
                isMobile={true}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;