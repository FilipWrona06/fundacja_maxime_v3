'use client';

import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

// --- Proste typy tylko dla obecnych potrzeb ---
type BaseProps = {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
};

type ButtonAsButton = BaseProps & { as?: 'button' } & ComponentProps<'button'>;
type ButtonAsLink = BaseProps & { as: 'link'; href: string } & ComponentProps<typeof Link>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = (props: ButtonProps) => {
  const { 
    as = 'button', 
    isLoading = false,
    className = '', 
    children, 
    ...rest 
  } = props;

  // --- STYLOWANIE ---
  // Wszystkie klasy stylu są teraz połączone w jedną stałą,
  // ponieważ nie ma wariantów.
  const styleClasses = `
    inline-flex items-center justify-center font-montserrat font-bold
    rounded-3xl transition-colors duration-250 hover:scale-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
    shadow-lg
    bg-transparent border-2 border-philippineSilver
    hover:bg-philippineSilver hover:text-raisinBlack hover:shadow-2xl
  `;

  const loadingClasses = isLoading ? 'opacity-75 cursor-wait' : '';

  // Łączymy wbudowane style z tymi przekazanymi przez `className`
  const finalClassName = `${styleClasses} ${loadingClasses} ${className}`.trim().replace(/\s+/g, ' ');

  // --- RENDEROWANIE ---
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