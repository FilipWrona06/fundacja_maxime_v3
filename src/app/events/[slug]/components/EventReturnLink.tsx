// src/app/events/[slug]/components/EventReturnLink.tsx
import Button from '@/components/Button';

const EventReturnLink = () => (
  <div className="mt-12 text-center">
    <Button as="link" href="/events" variant="secondary" className="rounded-full px-8 py-3 text-sm tracking-wider transition-all">
      ← Wróć do wszystkich wydarzeń
    </Button>
  </div>
);

export default EventReturnLink;