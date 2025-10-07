// src/components/layout/footer/Footer.tsx
import FooterBranding from './components/FooterBranding';
import FooterNavigation from './components/FooterNavigation';
import FooterContact from './components/FooterContact';
import NewsletterForm from './components/NewsletterForm';
import FooterCopyright from './components/FooterCopyright';

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <FooterBranding />
        <FooterNavigation />
        <FooterContact />
        <div className="md:col-span-4 lg:col-span-1">
          <NewsletterForm />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;