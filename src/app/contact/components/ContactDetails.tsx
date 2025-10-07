// src/app/contact/components/ContactDetails.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import SocialLink from '@/components/SocialLink';

// Definicje danych i ikon są teraz zamknięte w tym komponencie
interface ContactDetail {
  label: string;
  value: string;
  href: string;
}

const contactDetails: ContactDetail[] = [
  { label: 'Adres', value: 'ul. Przykładowa 123, 00-000 Warszawa', href: 'https://www.google.com/maps/search/?api=1&query=ul.+Przykładowa+123,+00-000+Warszawa' },
  { label: 'Email', value: 'kontakt@fundacjamaxime.pl', href: 'mailto:kontakt@fundacjamaxime.pl' },
  { label: 'Telefon', value: '+48 123 456 789', href: 'tel:+48123456789' },
];

const contactIcons: { [key: string]: React.ReactNode } = {
  Adres: <FaMapMarkerAlt />,
  Email: <FaEnvelope />,
  Telefon: <FaPhone />,
};

const ContactDetails = () => (
  <div className="mb-12 lg:mb-0 bg-transparent border-2 border-philippineSilver shadow-lg rounded-3xl p-8 transition-all">
    <h2 className="text-2xl font-bold">Dane kontaktowe</h2>
    <div className="mt-6 space-y-6">
      {contactDetails.map((detail) => (
        <a key={detail.label} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-start group">
          <div className="flex-shrink-0 mt-1">{contactIcons[detail.label]}</div>
          <div className="ml-4">
            <p className="text-lg font-semibold">{detail.label}</p>
            <p className="group-hover:font-semibold transition-all">{detail.value}</p>
          </div>
        </a>
      ))}
    </div>
    
    <hr className="my-8 border-philippineSilver" />
    <h3 className="text-xl font-bold mb-4">Znajdź nas w sieci</h3>
    <div className="flex gap-6 text-3xl">
      <SocialLink href="https://www.facebook.com/stowarzyszeniemaxime" title="Nasz Facebook"><FaFacebook /></SocialLink>
      <SocialLink href="https://www.instagram.com/maxime.orchestra/" title="Nasz Instagram"><FaInstagram /></SocialLink>
      <SocialLink href="https://www.youtube.com/@stowarzyszeniemaxime" title="Nasz kanał YouTube"><FaYoutube /></SocialLink>
      <SocialLink href="https://patronite.pl/stowarzyszeniemaxime" title="Wesprzyj nas na Patronite"><FaHeart /></SocialLink>
    </div>
  </div>
);

export default ContactDetails;