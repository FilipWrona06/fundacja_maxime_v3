// src/app/components/HeroVideoBackground.tsx

const HeroVideoBackground = () => (
  <>
    {/* Ciemna nakładka */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-20" />

    {/* Wideo w tle */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
    >
      <source src="/wideo_maxime.webm" type="video/webm" />
      <source src="/wideo_maxime.mp4" type="video/mp4" />
      Twoja przeglądarka nie obsługuje wideo.
    </video>
  </>
);

export default HeroVideoBackground;