'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationLinkProps = {
  href: string;
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
  className?: string; // <-- DODANY PROP DO PRZEKAZYWANIA DODATKOWYCH KLAS
};

const NavigationLink = ({ 
  href, 
  label, 
  isMobile = false, 
  onClick, 
  className = '' // <-- UŻYCIE PROPA Z WARTOŚCIĄ DOMYŚLNĄ
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Klasy, które są bazowe dla linków w Navbar
  const navBaseClasses = `
    px-3 py-2 rounded-3xl 
    font-montserrat font-bold  
    hover:scale-105 duration-250 transition-colors hover:bg-philippineSilver
  `;

  // Klasy specyficzne dla widoku (desktop/mobile w Navbar)
  const navSpecificClasses = isMobile
    ? 'block w-full text-center'
    : 'lg:text-base xl:text-lg';

  // Klasy dla aktywnego linku w Navbar
  const activeClasses = isActive ? 'bg-philippineSilver/25 scale-105' : '';

  // Jeśli przekazano className, używamy go. W przeciwnym razie, budujemy klasy dla Navbar.
  // To sprawia, że komponent jest bardziej elastyczny.
  const finalClassName = className 
    ? className // Użyj klas przekazanych z zewnątrz (np. w Footer)
    : `${navBaseClasses} ${navSpecificClasses} ${activeClasses}`; // Zbuduj klasy dla Navbar

  return (
    <Link
      href={href}
      onClick={onClick}
      className={finalClassName.trim().replace(/\s+/g, ' ')}
    >
      {label}
    </Link>
  );
};

export default NavigationLink;