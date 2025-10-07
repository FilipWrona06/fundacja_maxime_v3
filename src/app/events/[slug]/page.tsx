// src/app/events/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { eventsData } from '../page'; // <-- IMPORT Z GŁÓWNEJ STRONY WYDARZEŃ!

import EventHeader from './components/EventHeader';
import EventBanner from './components/EventBanner';
import EventDetails from './components/EventDetails';
import EventReturnLink from './components/EventReturnLink';

// Ta funkcja również korzysta z centralnych danych
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = eventsData.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <EventHeader
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
          />
          <EventBanner src={event.imageSrc} alt={event.title} />
          <EventDetails htmlContent={event.details} />
          <EventReturnLink />
        </div>
      </div>
    </main>
  );
}