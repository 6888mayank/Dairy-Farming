import React from 'react';
import { BRAND } from '../data/content';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Vasundhara Diary and Farms! I would like to inquire regarding your planned 5.5-acre modern dairy farming project and livestock.`
    );
    window.open(`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsApp}
        aria-label="Contact us on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500" />
        </div>
        <span className="font-bold text-xs tracking-wide hidden sm:inline-block">
          WhatsApp Chat
        </span>
      </button>
    </div>
  );
};
