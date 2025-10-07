'use client';

import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

// --- Typy dla polimorfizmu (bez zmian) ---
type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  isLoading?: boolean;
};
type ButtonAsButton = BaseProps & { as?: 'button' } & ComponentProps<'button'>;
type ButtonAsLink = BaseProps & { as: 'link'; href: string } & ComponentProps<typeof Link>;
type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = (props: ButtonProps) => {
  const { 
    as = 'button', 
    variant = 'primary',
    isLoading = false,
    className = '', 
    children, 
    ...rest 
  } = props;

  // --- STYLOWANIE (Z POPRAWKAMI) ---
  const baseClasses = `
    inline-flex items-center justify-center font-bold
    transition-all duration-250
    disabled:cursor-not-allowed
  `;

  const variantClasses: Record<Variant, string> = {
    // Wariant główny (np. dla przyszłych przycisków) zachowuje lekko zaokrąglone rogi
    primary: `
      bg-raisinBlack text-white hover:bg-opacity-80
      shadow-md hover:shadow-lg rounded-lg
      disabled:bg-gray-200 disabled:text-gray-700 disabled:shadow-none
    `,
    // Nasz główny wariant "ghost" otrzymuje domyślne zaokrąglenie `rounded-3xl`
    secondary: `
      bg-transparent border-2 border-philippineSilver
      hover:bg-philippineSilver hover:text-raisinBlack
      shadow-lg hover:shadow-2xl hover:scale-105 rounded-3xl
      disabled:opacity-50 disabled:scale-100
    `,
  };

  const loadingClasses = isLoading ? 'opacity-75 cursor-wait' : '';

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${loadingClasses} ${className}`.trim().replace(/\s+/g, ' ');

  // --- RENDEROWANIE (bez zmian) ---
  const content = isLoading ? 'Ładowanie...' : children;
  
  if (as === 'link') {
    const linkProps = rest as Omit<ButtonAsLink, keyof BaseProps | 'as'>;
    return (
      <Link className={finalClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof BaseProps | 'as'>;
  return (
    <button className={finalClassName} disabled={isLoading || buttonProps.disabled} {...buttonProps}>
      {content}
    </button>
  );
};

export default Button;