// src/app/events/[slug]/components/EventBanner.tsx
import Image from 'next/image';

type EventBannerProps = {
  src: string;
  alt: string;
};

const EventBanner = ({ src, alt }: EventBannerProps) => (
  <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-lg">
    <Image src={src} alt={alt} fill className="object-cover" priority />
  </div>
);

export default EventBanner;