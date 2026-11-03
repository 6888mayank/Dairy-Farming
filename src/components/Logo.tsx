import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', onClick }) => {
  const isLight = variant === 'light';

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* Cow Head + Leaf Brand Icon */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#164D32] to-[#27864B] shadow-md shadow-[#164D32]/20 group-hover:scale-105 transition-transform duration-300">
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 drop-shadow-sm"
        >
          {/* Subtle Back Leaves */}
          <path 
            d="M14 14C10 12 7 14 6 18C5 22 8 24 11 23C13 22.5 14 20 14 18Z" 
            fill="#34A853" 
            opacity="0.9"
          />
          <path 
            d="M34 14C38 12 41 14 42 18C43 22 40 24 37 23C35 22.5 34 20 34 18Z" 
            fill="#34A853" 
            opacity="0.9"
          />
          {/* Minimalist Cow Face Contour */}
          <path 
            d="M17 18C17 16 20 15 24 15C28 15 31 16 31 18C32 22 33 25 33 30C33 36 29 40 24 40C19 40 15 36 15 30C15 25 16 22 17 18Z" 
            fill="#FFFFFF" 
          />
          {/* Cow Horns - Organic Minimal Curves */}
          <path 
            d="M18 16C15 12 11 13 10 16C12 16 15 17 17 19" 
            stroke="#FFF9F1" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <path 
            d="M30 16C33 12 37 13 38 16C36 16 33 17 31 19" 
            stroke="#FFF9F1" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          {/* Cow Ears */}
          <path 
            d="M15 21C11 21 8 23 8 25C8 27 11 27 15 24" 
            fill="#FFF9F1" 
          />
          <path 
            d="M33 21C37 21 40 23 40 25C40 27 37 27 33 24" 
            fill="#FFF9F1" 
          />
          {/* Holstein Spot on Cow Forehead */}
          <path 
            d="M21 19C22 18 25 18 26 21C25 24 22 25 21 23Z" 
            fill="#26332C" 
          />
          {/* Eyes */}
          <circle cx="20" cy="27" r="1.3" fill="#26332C" />
          <circle cx="28" cy="27" r="1.3" fill="#26332C" />
          {/* Muzzle */}
          <ellipse cx="24" cy="34" rx="5.5" ry="4" fill="#FFE4E8" />
          <circle cx="22" cy="34.5" r="0.9" fill="#26332C" />
          <circle cx="26" cy="34.5" r="0.9" fill="#26332C" />
          {/* Crown Watermelon Sprout / Natural Leaf */}
          <path 
            d="M24 10C22.5 12.5 22.5 14.5 24 16C25.5 14.5 25.5 12.5 24 10Z" 
            fill="#F04458" 
          />
          <path 
            d="M21 12C19 13 19 15 21 16C22 14.5 22 13 21 12Z" 
            fill="#27864B" 
          />
          <path 
            d="M27 12C29 13 29 15 27 16C26 14.5 26 13 27 12Z" 
            fill="#27864B" 
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-display font-extrabold text-lg tracking-tight leading-none ${
          isLight ? 'text-white' : 'text-[#164D32]'
        }`}>
          VASUNDHARA
        </span>
        <span className={`text-[10px] font-bold tracking-[0.22em] uppercase mt-1 leading-none ${
          isLight ? 'text-[#FF7185]' : 'text-[#27864B]'
        }`}>
          DIARY AND FARMS
        </span>
      </div>
    </div>
  );
};
