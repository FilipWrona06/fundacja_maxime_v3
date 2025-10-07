import { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  title: string;
  children: ReactNode;
  className?: string; // <-- DODAJ TEN PROP
};

const SocialLink = ({ href, title, children, className = '' }: SocialLinkProps) => {
  // Domyślne style, takie jak w stopce
  const baseClasses = "text-2xl hover:text-philippineSilver transition-colors hover:scale-105 duration-250 shadow-lg hover:shadow-2xl";

  // Jeśli przekazano className, używamy go. W przeciwnym razie, używamy stylów domyślnych.
  const finalClassName = className ? className : baseClasses;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={finalClassName}
    >
      {children}
    </a>
  );
};

export default SocialLink;