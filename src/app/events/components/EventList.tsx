// src/app/events/components/EventList.tsx
import { Event } from '../page'; // <-- WAŻNE: Importujemy typ z głównego pliku page.tsx
import EventCard from './EventCard';

type EventListProps = {
  title: string;
  events: Event[];
  emptyMessage?: string;
};

const EventList = ({ title, events, emptyMessage }: EventListProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="space-y-12">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>{emptyMessage || 'Brak wydarzeń do wyświetlenia.'}</p>
        )}
      </div>
    </section>
  );
};

export default EventList;