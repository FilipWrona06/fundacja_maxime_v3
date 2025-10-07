// src/app/gallery/components/Lightbox.tsx
import Image from 'next/image';
import { MouseEvent } from 'react';
import { GalleryImage } from '../page'; // Importujemy typ z głównego pliku

type LightboxProps = {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const Lightbox = ({ image, onClose, onNext, onPrev }: LightboxProps) => {
  const handleChildClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      {/* Przycisk "Poprzedni" */}
      <button
        onClick={(e) => { handleChildClick(e); onPrev(); }}
        aria-label="Poprzednie zdjęcie"
        className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-20 rounded-full bg-black/85 p-2 transition focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Główny obraz */}
      <div className="relative h-[90vh] w-[90vw] max-w-5xl p-4" onClick={handleChildClick}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-full w-full rounded-lg object-contain" sizes="90vw" />
      </div>

      {/* Przycisk "Następny" */}
      <button
        onClick={(e) => { handleChildClick(e); onNext(); }}
        aria-label="Następne zdjęcie"
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-20 rounded-full bg-black/85 p-2 transition focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Przycisk "Zamknij" */}
      <button onClick={onClose} className="absolute right-2 top-2 md:right-4 md:top-4 z-20 text-3xl transition-colors hover:text-philippineSilver" aria-label="Zamknij">&times;</button>
    </div>
  );
};

export default Lightbox;