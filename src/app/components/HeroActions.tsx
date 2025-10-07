// src/app/components/HeroActions.tsx
import Button from '@/components/Button'; // Załóżmy, że Button jest teraz w /ui

const HeroActions = () => (
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
);

export default HeroActions;