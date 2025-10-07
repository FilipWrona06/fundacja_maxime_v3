// src/app/about/components/HistoryTimeline.tsx
import TimelineEvent from './TimelineEvent';

// Definicja typu danych, używana również w komponencie potomnym
export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

// Dane dla osi czasu
const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'Początki i pierwsze sukcesy',
    description: 'Wierzymy, że kluczem do lepszej przyszłości jest dostęp do wiedzy. Organizujemy warsztaty, szkolenia i spotkania, które inspirują do działania i poszerzania horyzontów.',
    imageUrl: '/about/2022.jpg',
    imageAlt: 'Wydarzenia fundacji z roku 2022',
  },
  {
    year: '2023',
    title: 'Rozwój społeczności',
    description: 'Nasza siła tkwi w społeczności. Budujemy mosty między ludźmi, tworząc przestrzeń do wzajemnej pomocy i integracji. Działamy lokalnie, myśląc globalnie.',
    imageUrl: '/about/2023.png',
    imageAlt: 'Wydarzenia fundacji z roku 2023',
  },
  {
    year: '2024',
    title: 'Nowe horyzonty',
    description: 'Każdy projekt tworzymy z pasją i zaangażowaniem, dążąc do realnej zmiany i wspierania talentów w naszej społeczności.',
    imageUrl: '/about/2024.jpeg',
    imageAlt: 'Wydarzenia fundacji z roku 2024',
  },
  {
    year: '2025',
    title: 'Patrzymy w przyszłość',
    description: 'Nasze inicjatywy mają realny i trwały wpływ na otoczenie. Planujemy dalszy rozwój i nowe, ekscytujące projekty.',
    imageUrl: '/about/2025.jpg',
    imageAlt: 'Wydarzenia fundacji z roku 2025',
  },
];

const HistoryTimeline = () => (
  <div className="space-y-20">
    {timelineData.map((item, index) => (
      <TimelineEvent
        key={item.year}
        item={item}
        isReversed={index % 2 !== 0}
      />
    ))}
  </div>
);

export default HistoryTimeline;