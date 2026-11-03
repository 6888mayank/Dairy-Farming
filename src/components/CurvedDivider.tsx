import React from 'react';

interface CurvedDividerProps {
  position?: 'top' | 'bottom';
  fillColor?: string;
  variant?: 'wave' | 'organic' | 'arch';
  height?: number;
  className?: string;
}

export const CurvedDivider: React.FC<CurvedDividerProps> = ({
  position = 'bottom',
  fillColor = '#FFF9F1',
  variant = 'organic',
  height = 64,
  className = '',
}) => {
  const isTop = position === 'top';

  return (
    <div 
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        isTop ? '-mt-px mb-0' : '-mb-px mt-0'
      } ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none" 
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
      >
        {variant === 'organic' && (
          <path 
            d="M0,32 C320,120 420,-10 720,45 C1020,100 1240,10 1440,48 L1440,120 L0,120 Z" 
            fill={fillColor} 
          />
        )}
        {variant === 'wave' && (
          <path 
            d="M0,64 C240,120 480,20 720,64 C960,108 1200,20 1440,64 L1440,120 L0,120 Z" 
            fill={fillColor} 
          />
        )}
        {variant === 'arch' && (
          <path 
            d="M0,80 C480,0 960,0 1440,80 L1440,120 L0,120 Z" 
            fill={fillColor} 
          />
        )}
      </svg>
    </div>
  );
};
