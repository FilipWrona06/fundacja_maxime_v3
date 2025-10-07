import React from 'react';
import Button from '@/components/Button'; // <-- IMPORT UNIWERSALNEGO KOMPONENTU

export default function Home() {
   return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* =========================================== */}
      {/* TŁO WIDEO*/}
      {/* =========================================== */}
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
      
      {/* =========================================== */}
      {/* GŁÓWNA TREŚĆ*/}
      {/* =============================================== */}
      <div className="relative z-30 px-4">
        <h1 className="text-5xl md:text-7xl p-2.5 font-youngest tracking-wide mb-4">
          Z pasji do muzyki
        </h1>
        <p className="text-lg md:text-2xl font-montserrat font-bold mb-8">
          Poznaj historię i brzmienie naszej orkiestry.
        </p>
      </div>

      {/* ============================================ */}
      {/* PRZYCISKI AKCJI - Z UŻYCIEM KOMPONENTU Button */}
      {/* ============================================ */}
      <div className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          as="link"
          variant='secondary'
          href="/events"
          className="rounded-full px-8 py-3 text-sm tracking-wider transition-all"
        >
          Zobacz nadchodzące koncerty
        </Button>
        <Button
          as="link"
          variant='secondary'
          href="/about"
          className="rounded-full px-8 py-3 text-sm tracking-wider transition-all"
        >
          Poznaj nas
        </Button>
      </div>

    </main>
  );
};