// src/components/layout/navbar/components/MobileNavbar.tsx
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import NavigationLink from '@/components/NavigationLink';
import HamburgerButton from './HamburgerButton';
import { NavLinkData } from '../Navbar'; // Importujemy typ

type MobileNavbarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  navLinks: NavLinkData[];
};

const MobileNavbar = ({ isOpen, toggleMenu, closeMenu, navLinks }: MobileNavbarProps) => (
  <>
    {/* =========================================== */}
    {/* NAGŁÓWEK MOBILNY                            */}
    {/* ========================================= */}
    <div className="lg:hidden flex justify-between items-center w-full">
      <Logo className="text-4xl pl-1.5" />
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
    </div>

    {/* ============================================== */}
    {/* ROZWIJANE MENU MOBILNE                         */}
    {/*===============================================*/}
    {isOpen && (
      <div className="absolute top-full left-0 w-full bg-raisinBlack mt-0 p-4 space-y-2 flex flex-col items-center lg:hidden">
        <Button
          as="link"
          href="https://patronite.pl/stowarzyszeniemaxime"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          variant="secondary"
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
  </>
);

export default MobileNavbar;