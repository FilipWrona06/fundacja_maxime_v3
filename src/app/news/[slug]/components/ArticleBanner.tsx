// src/app/news/[slug]/components/ArticleBanner.tsx
import Image from 'next/image';

type ArticleBannerProps = {
  src: string;
  alt: string;
};

const ArticleBanner = ({ src, alt }: ArticleBannerProps) => (
  <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority
    />
  </div>
);

export default ArticleBanner;