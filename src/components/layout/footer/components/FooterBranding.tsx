// src/components/layout/footer/components/FooterBranding.tsx
import Logo from '@/components/Logo';
import SocialLink from '@/components/SocialLink';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

const FooterBranding = () => (
  <div className="md:col-span-2">
    <Logo as="h3" isLink={false} className="text-4xl mb-4" />
    <p className="font-montserrat text-sm max-w-md">
      Dzielimy się pasją do muzyki klasycznej, inspirując i edukując kolejne pokolenia artystów i słuchaczy.
    </p>
    <div className="flex gap-4 mt-6">
      <SocialLink href="https://www.facebook.com/stowarzyszeniemaxime" title="Nasz Facebook"><FaFacebook /></SocialLink>
      <SocialLink href="https://www.instagram.com/maxime.orchestra/" title="Nasz Instagram"><FaInstagram /></SocialLink>
      <SocialLink href="https://www.youtube.com/@stowarzyszeniemaxime" title="Nasz kanał YouTube"><FaYoutube /></SocialLink>
      <SocialLink href="https://patronite.pl/stowarzyszeniemaxime" title="Wesprzyj nas na Patronite"><FaHeart /></SocialLink>
    </div>
  </div>
);

export default FooterBranding;