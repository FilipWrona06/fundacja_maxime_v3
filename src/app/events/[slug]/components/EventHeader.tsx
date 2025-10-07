// src/app/events/[slug]/components/EventHeader.tsx
import { Event } from '../../page'; // <-- Importujemy typ z głównej strony wydarzeń

type EventHeaderProps = {
  title: Event['title'];
  date: Event['date'];
  time: Event['time'];
  location: Event['location'];
};

const EventHeader = ({ title, date, time, location }: EventHeaderProps) => (
  <header className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg">
      <span>📅 {`${date.day} ${date.month} ${date.year}`}</span>
      <span>🕒 {time}</span>
      <span>📍 {location}</span>
    </div>
    <div className="w-3/4 h-0.5 bg-philippineSilver mx-auto mt-8"></div>
  </header>
);

export default EventHeader;