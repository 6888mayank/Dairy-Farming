import React from 'react';

interface LeafDecorationProps {
  className?: string;
  size?: number;
  rotation?: number;
  color?: string;
  opacity?: number;
}

export const LeafDecoration: React.FC<LeafDecorationProps> = ({
  className = '',
  size = 48,
  rotation = 0,
  color = '#27864B',
  opacity = 0.85
}) => {
  return (
    <div 
      className={`pointer-events-none select-none inline-block ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: size,
        height: size,
        opacity
      }}
    >
      <svg 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <path 
          d="M8 56C12 40 24 20 56 8C52 24 40 44 8 56Z" 
          fill={color} 
        />
        <path 
          d="M10 54C24 42 38 28 54 10" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeOpacity="0.35"
        />
        <path 
          d="M26 40C30 36 34 36 38 38" 
          stroke="#FFFFFF" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeOpacity="0.25"
        />
        <path 
          d="M38 28C42 24 46 24 50 26" 
          stroke="#FFFFFF" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
};
