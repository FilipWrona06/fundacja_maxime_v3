// src/app/events/components/EventCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { Event } from '../page'; // <-- WAŻNE: Importujemy typ z głównego pliku page.tsx

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  const isArchived = event.status === 'zakończone';

  return (
    <div
      className={`group bg-transparent border-2 border-philippineSilver hover:font-semibold shadow-lg hover:shadow-2xl hover:scale-105 rounded-3xl overflow-hidden hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250 ${isArchived ? 'opacity-60' : ''}`}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-5/12">
          <div className="relative h-48 md:h-full w-full">
            <Image
              src={event.imageSrc}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
        </div>
        <div className="p-8 md:w-7/12 flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide">{`${event.date.day} ${event.date.month} ${event.date.year} · ${event.time}`}</p>
            <Link href={`/events/${event.slug}`} className="cursor-pointer">
              <h2 className="mt-2 text-2xl font-bold transition-colors">{event.title}</h2>
            </Link>
            <p className="mt-4">{event.location}</p>
          </div>
          <div className="pt-4">
            {event.status === 'nadchodzące' && (
              <Button
                as="link"
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-6 w-full md:w-auto px-6 py-3 rounded-full"
              >
                Kup Bilet
              </Button>
            )}
            {event.status === 'wyprzedane' && (
              <Button
                disabled
                variant="secondary"
                className="mt-6 w-full md:w-auto px-6 py-3 rounded-full"
              >
                Wyprzedane
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;