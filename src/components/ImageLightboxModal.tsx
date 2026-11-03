import React from 'react';
import { GalleryItem } from '../types';
import { X, ZoomIn, ShieldCheck } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
      />

      {/* Lightbox container */}
      <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-auto object-contain max-h-[65vh]"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-[#FF7185]" />
            <span>{item.category} Photography</span>
          </div>
        </div>

        {/* Caption Bar */}
        <div className="p-6 bg-[#FFF9F1] border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-[#164D32]">
              {item.title}
            </h4>
            <p className="text-[#556B60] text-sm mt-1 max-w-xl">
              {item.caption}
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#27864B] bg-[#EAF5EE] px-3.5 py-1.5 rounded-full border border-[#27864B]/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Planned Unit Reference
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
