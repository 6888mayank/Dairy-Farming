import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { NAV_ITEMS, BRAND } from '../data/content';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2.5 sm:py-3.5' : 'py-3.5 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            aria-label="Main Navigation"
            className={`w-full rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-[#164D32]/10 border border-[#164D32]/10' 
                : 'bg-white/90 backdrop-blur-sm shadow-md shadow-[#164D32]/5 border border-[#164D32]/5'
            }`}
          >
            {/* Left: Brand Logo */}
            <Logo 
              onClick={() => handleNavClick('home')} 
              className="py-0.5"
            />

            {/* Center: Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id as PageId)}
                      className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isActive 
                          ? 'text-[#164D32] bg-[#EAF5EE] font-bold shadow-xs' 
                          : 'text-[#26332C]/80 hover:text-[#164D32] hover:bg-[#FFF9F1]'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F04458]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right: CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA Button */}
              <button
                onClick={onOpenEnquiry}
                className="hidden sm:inline-flex items-center gap-2 bg-[#F04458] hover:bg-[#DC3348] text-white px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-md shadow-[#F04458]/25 hover:shadow-lg hover:shadow-[#F04458]/40 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-xl text-[#164D32] hover:bg-[#EAF5EE] transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
          />

          {/* Drawer Content */}
          <div className="fixed top-20 right-4 left-4 max-w-md mx-auto bg-white rounded-3xl p-6 shadow-2xl border border-[#164D32]/10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#27864B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F04458]" /> Navigation Menu
              </span>
              <span className="text-xs text-gray-500 font-medium">5.5 Acres Planned Unit</span>
            </div>

            <nav className="mt-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as PageId)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-left transition-all ${
                      isActive 
                        ? 'bg-[#EAF5EE] text-[#164D32] font-bold border-l-4 border-[#F04458]' 
                        : 'text-[#26332C] hover:bg-[#FFF9F1]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#F04458]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F04458] hover:bg-[#DC3348] text-white py-3 rounded-2xl font-bold tracking-wide shadow-md shadow-[#F04458]/30 transition-all cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BRAND.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#FFF9F1] hover:bg-[#EAF5EE] text-[#164D32] py-2.5 rounded-2xl font-semibold text-sm transition-colors border border-[#164D32]/10"
              >
                <PhoneCall className="w-4 h-4 text-[#27864B]" />
                <span>Call Us: {BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
