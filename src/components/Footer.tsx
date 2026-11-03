import React, { useState } from 'react';
import { PageId } from '../types';
import { BRAND, NAV_ITEMS } from '../data/content';
import { Logo } from './Logo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#164D32] text-white pt-20 pb-10 overflow-hidden border-t-4 border-[#27864B]">
      {/* Subtle background natural patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-leaf" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M10 50 C 20 20, 40 10, 50 10 C 40 40, 20 50, 10 50 Z" fill="#FFFFFF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-leaf)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Planned Specifications Banner */}
        <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-8 mb-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#27864B] flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">
                Planned Dairy Farming Venture
              </h4>
              <p className="text-white/70 text-sm mt-0.5">
                5.5 Acres Fertile Agricultural Land • 20 Planned HF & Jersey Cattle
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF7185] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              Responsible Cattle Care
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-[#34A853] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              Sustainable Agriculture
            </span>
            <button
              onClick={() => onNavigate('farm')}
              className="text-xs uppercase font-bold tracking-wider text-white bg-[#F04458] hover:bg-[#DC3348] px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              Explore Farm Vision →
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" onClick={() => onNavigate('home')} />
            <p className="text-white/80 text-sm leading-relaxed max-w-sm mt-3">
              Vasundhara Diary and Farms is an upcoming modern dairy farming venture focused on combining 5.5 acres of fertile agricultural land, modern dairy infrastructure, responsible animal welfare, and sustainable practices.
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest font-bold text-[#FF7185]">
                {BRAND.tagline}
              </p>
              <p className="text-xs text-white/60 font-medium italic mt-1">
                "{BRAND.finalMessage}"
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white/90 border-b border-[#27864B] pb-2 inline-block">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id as PageId)}
                    className="text-white/75 hover:text-[#FF7185] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27864B]" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Planned Operations & Offerings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white/90 border-b border-[#27864B] pb-2 inline-block">
              Proposed Offerings
            </h5>
            <ul className="space-y-2 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F04458]" />
                <span>Fresh Cow Milk (Planned)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F04458]" />
                <span>Pasteurized Whole Milk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F04458]" />
                <span>Traditional Set Curd (Dahi)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F04458]" />
                <span>Fresh Artisanal Paneer</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F04458]" />
                <span>Traditional Granular Ghee</span>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-white/50 block">
                  * All product categories are proposed offerings pending commissioning.
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details & Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white/90 border-b border-[#27864B] pb-2 inline-block">
              Get In Touch
            </h5>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F04458] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#27864B] shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="text-xs hover:text-[#FF7185] transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF7185] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-xs hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>

            {/* Newsletter / Project Updates Form */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-white/90 block mb-1.5">
                Stay Updated on Farm Progress
              </span>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#0E3522] border border-white/20 rounded-full px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F04458] pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#F04458] hover:bg-[#DC3348] flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-[#34A853] mt-1.5 flex items-center gap-1 font-medium animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for your interest!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Vasundhara Diary and Farms. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <button 
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#FF7185] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
