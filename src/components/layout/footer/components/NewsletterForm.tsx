// src/components/layout/footer/components/NewsletterForm.tsx
'use client';

import { useState, useEffect, FormEvent } from 'react';
import jsonp from 'jsonp';
import Button from '@/components/Button';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || email.indexOf('@') === -1) {
      setStatus('error');
      setMessage('Proszę podać prawidłowy adres e-mail.');
      return;
    }
    setStatus('loading');
    setMessage('');
    
    const mailchimpUrl = 'https://interia.us22.list-manage.com/subscribe/post?u=571c8b619e1df84cb6ac15b70&id=dfa3ed976c&f_id=00f1c2e1f0';
    const url = mailchimpUrl.replace('/post?', '/post-json?');

    jsonp(`${url}&EMAIL=${encodeURIComponent(email)}`, { param: 'c' }, (err, data) => {
      if (err || data.result !== 'success') {
        setStatus('error');
        setMessage(data?.msg?.includes("is already subscribed") 
          ? 'Ten adres jest już zapisany.' 
          : 'Błąd. Sprawdź adres i spróbuj ponownie.'
        );
      } else {
        setStatus('success');
        setMessage('Dziękujemy! Sprawdź skrzynkę, by potwierdzić zapis.');
        setEmail('');
      }
    });
  };

  return (
    <div>
      <h4 className="text-lg font-montserrat font-bold mb-4">Bądź na bieżąco</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          type="email" 
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Adres e-mail do newslettera"
          className="w-full px-4 py-2 bg-black/50 hover:scale-105 duration-250 placeholder-philippineSilver rounded-3xl focus:outline-none focus:ring-2 focus:ring-philippineSilver font-montserrat" 
        />
        <Button
          type="submit"
          variant='secondary'
          isLoading={status === 'loading'}
          className="w-full px-4 py-2"
        >
          {status === 'loading' ? 'Zapisywanie...' : 'Zapisz się'}
        </Button>
      </form>
      <div className="h-6 mt-2 text-center">
        {status === 'success' && <p className="text-sm font-montserrat text-green-400">{message}</p>}
        {status === 'error' && <p className="text-sm font-montserrat text-red-400">{message}</p>}
      </div>
    </div>
  );
};

export default NewsletterForm;