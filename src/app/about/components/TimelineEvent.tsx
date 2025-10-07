// src/app/about/components/TimelineEvent.tsx
import Image from 'next/image';
import { TimelineItem } from './HistoryTimeline'; // Importujemy typ z komponentu nadrzędnego

type TimelineEventProps = {
  item: TimelineItem;
  isReversed: boolean;
};

const TimelineEvent = ({ item, isReversed }: TimelineEventProps) => {
  const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`flex flex-col items-center gap-10 md:gap-16 ${flexDirection}`}>
      {/* Obraz */}
      <div className="w-full md:w-5/12">
        <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
          <Image
            src={item.imageUrl}
            alt={item.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Treść */}
      <div className="w-full md:w-7/12 text-center md:text-left">
        <h2 className="text-3xl font-montserrat font-bold mb-4">{item.year} - {item.title}</h2>
        <p className="text-lg font-montserrat leading-relaxed">
          {item.description}
        </p>
      </div>
    </section>
  );
};

export default TimelineEvent;