// src/app/gallery/components/InteractiveGallery.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { GalleryImage, galleryImages } from '../page'; // Importujemy dane i typ
import Lightbox from './Lightbox';

const InteractiveGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = useCallback((image: GalleryImage) => setSelectedImage(image), []);
  const closeModal = useCallback(() => setSelectedImage(null), []);

  const handleNext = useCallback(() => {
    setSelectedImage(currentImage => {
      if (!currentImage) return null;
      const currentIndex = galleryImages.findIndex((img) => img.src === currentImage.src);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      return galleryImages[nextIndex];
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setSelectedImage(currentImage => {
      if (!currentImage) return null;
      const currentIndex = galleryImages.findIndex((img) => img.src === currentImage.src);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      return galleryImages[prevIndex];
    });
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, handleNext, handlePrevious]);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={image.src} className="mb-4 break-inside-avoid">
            <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl aspect-square" onClick={() => openModal(image)}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" priority={index < 8} sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrevious}
        />
      )}
    </>
  );
};

export default InteractiveGallery;