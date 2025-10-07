// src/app/contact/components/ContactForm.tsx
'use client';

import React, { FormEvent } from 'react';
import Button from '@/components/Button'; // Załóżmy, że Button jest w /ui

const ContactForm = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Tutaj w przyszłości będzie logika wysyłki, np. przez API route
    alert('Dziękujemy za wiadomość! (To jest symulacja wysyłki)');
    event.currentTarget.reset();
  };

  return (
    <div className="bg-transparent border-2 border-philippineSilver shadow-lg rounded-3xl p-8 transition-all">
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Imię i nazwisko</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 bg-transparent border-2 border-philippineSilver rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-raisinBlack transition-all"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Adres email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 bg-transparent border-2 border-philippineSilver rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-raisinBlack transition-all"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Wiadomość</label>
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 bg-transparent border-2 border-philippineSilver rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-raisinBlack transition-all"></textarea>
        </div>
        <div>
          <Button type="submit" variant='secondary' className="w-full py-3 px-4">
            Wyślij wiadomość
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;