// src/components/layout/navbar/components/DesktopNavbar.tsx
import NavigationLink from '@/components/NavigationLink';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import { NavLinkData } from '../Navbar'; // Importujemy typ z głównego komponentu

type DesktopNavbarProps = {
  leftLinks: NavLinkData[];
  rightLinks: NavLinkData[];
};

const DesktopNavbar = ({ leftLinks, rightLinks }: DesktopNavbarProps) => (
  <div className="hidden lg:flex w-full items-center">
    {/* Sekcja lewych linków */}
    <div className="flex-1 flex justify-start lg:space-x-1 xl:space-x-2">
      {leftLinks.map((link) => (
        <NavigationLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>

    {/* Logo */}
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
        variant="secondary"
        className="ml-4 px-5 py-2 text-sm"
      >
        Wesprzyj nas
      </Button>
    </div>
  </div>
);

export default DesktopNavbar;