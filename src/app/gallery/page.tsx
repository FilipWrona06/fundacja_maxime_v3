// src/app/gallery/page.tsx
import GalleryHeader from './components/GalleryHeader';
import InteractiveGallery from './components/InteractiveGallery';

// =====================================================
//  1. DANE SĄ CENTRALNIE EKSPORTOWANE STĄD
// ====================================================
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: readonly GalleryImage[] = [
  { src: '/gallery/photo1.jpg', alt: 'Opis zdjęcia numer 1', width: 1200, height: 800 },
  { src: '/gallery/photo2.jpg', alt: 'Opis zdjęcia numer 2', width: 1200, height: 800 },
  { src: '/gallery/photo3.jpg', alt: 'Opis zdjęcia numer 3', width: 800, height: 1200 },
  { src: '/gallery/photo4.jpg', alt: 'Opis zdjęcia numer 4', width: 1200, height: 800 },
  { src: '/gallery/photo5.jpg', alt: 'Opis zdjęcia numer 5', width: 1200, height: 800 },
  { src: '/gallery/photo6.jpg', alt: 'Opis zdjęcia numer 6', width: 800, height: 1200 },
  { src: '/gallery/photo7.jpg', alt: 'Opis zdjęcia numer 7', width: 1200, height: 800 },
  { src: '/gallery/photo8.jpg', alt: 'Opis zdjęcia numer 8', width: 1200, height: 800 },
] as const;

// =====================================================
//  2. GŁÓWNY KOMPONENT STRONY (SERVER COMPONENT)
// ====================================================
export default function GalleryPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <GalleryHeader />
      <InteractiveGallery />
    </main>
  );
};