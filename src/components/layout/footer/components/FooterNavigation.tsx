// src/components/layout/footer/components/FooterNavigation.tsx
import NavigationLink from '@/components/NavigationLink';

const FooterNavigation = () => (
  <div>
    <h4 className="text-lg font-montserrat font-bold mb-4">Nawigacja</h4>
    <div className="flex flex-col gap-2 font-montserrat text-sm">
      <NavigationLink href="/about" label="O nas" className="hover:text-philippineSilver transition-colors hover:scale-105 duration-250" />
      <NavigationLink href="/events" label="Wydarzenia" className="hover:text-philippineSilver transition-colors hover:scale-105 duration-250" />
      <NavigationLink href="/gallery" label="Galeria" className="hover:text-philippineSilver transition-colors hover:scale-105 duration-250" />
      <NavigationLink href="/contact" label="Kontakt" className="hover:text-philippineSilver transition-colors hover:scale-105 duration-250" />
    </div>
  </div>
);

export default FooterNavigation;