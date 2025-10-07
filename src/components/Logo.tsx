'use client';

import Link from 'next/link';

type LogoProps = {
  className?: string;
  /**
   * Określa, czy logo ma być klikalnym linkiem do strony głównej.
   * @default true
   */
  isLink?: boolean;
  /**
   * Określa, jaki tag HTML ma być użyty, gdy logo nie jest linkiem.
   * @default 'h3'
   */
  as?: 'h3' | 'div' | 'p';
};

const Logo = ({ className = '', isLink = true, as: Tag = 'h3' }: LogoProps) => {

  // Wersja z linkiem (dla Navbar)
  if (isLink) {
    return (
      <div className={`hover:scale-105 duration-250 ${className}`.trim()}>
        <Link href="/" className="font-youngest">
          Fundacja Maxime
        </Link>
      </div>
    );
  }

  // Wersja bez linku (dla Footer)
  return (
    <Tag className={`${className} font-youngest`.trim()}>
      Fundacja Maxime
    </Tag>
  );
};

export default Logo;