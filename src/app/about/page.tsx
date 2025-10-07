// src/app/about/page.tsx
import MissionSection from './components/MissionSection';
import HistoryTimeline from './components/HistoryTimeline';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16 md:py-24">
      <MissionSection />
      <HistoryTimeline />
    </main>
  );
};