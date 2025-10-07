// src/app/contact/page.tsx
import ContactHeader from './components/ContactHeader';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <ContactHeader />
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}