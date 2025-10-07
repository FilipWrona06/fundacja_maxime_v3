// src/app/page.tsx
import HeroVideoBackground from './components/HeroVideoBackground';
import HeroContent from './components/HeroContent';
import HeroActions from './components/HeroActions';

export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      <HeroVideoBackground />
      <HeroContent />
      <HeroActions />
    </main>
  );
};