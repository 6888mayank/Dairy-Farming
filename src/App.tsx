import React, { useState, useEffect } from 'react';
import './App.css';
import { PageId, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { LegalModals } from './components/LegalModals';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FarmPage } from './pages/FarmPage';
import { ProductsPage } from './pages/ProductsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryInitialType, setEnquiryInitialType] = useState('General Enquiry');
  const [enquiryInitialProduct, setEnquiryInitialProduct] = useState('');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync with URL Hash for natural back/forward navigation and direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'farm', 'products', 'sustainability', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (type = 'General Enquiry', product = '') => {
    setEnquiryInitialType(type);
    setEnquiryInitialProduct(product);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F1] text-[#26332C] selection:bg-[#F04458] selection:text-white">
      {/* Sticky Floating Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry('General Enquiry')}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenEnquiry={() => handleOpenEnquiry('Business Partnership')}
          />
        )}
        {activePage === 'farm' && (
          <FarmPage
            onNavigate={navigateTo}
            onOpenEnquiry={() => handleOpenEnquiry('Agricultural Collaboration')}
          />
        )}
        {activePage === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {activePage === 'sustainability' && (
          <SustainabilityPage
            onNavigate={navigateTo}
            onOpenEnquiry={() => handleOpenEnquiry('Agricultural Collaboration')}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Deep Forest Green Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Global Interactive Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialType={enquiryInitialType}
        initialProduct={enquiryInitialProduct}
      />

      <ImageLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
