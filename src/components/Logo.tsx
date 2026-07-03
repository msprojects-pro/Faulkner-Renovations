import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true, light = false }: LogoProps) {
  const sizeMap = {
    sm: { svg: 'h-8 w-8', text: 'text-base' },
    md: { svg: 'h-10 w-10', text: 'text-lg' },
    lg: { svg: 'h-14 w-14', text: 'text-2xl' },
    xl: { svg: 'h-20 w-20', text: 'text-3xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Circular Faulkner Renovations Logo */}
      <div className={`relative ${currentSize.svg} flex-shrink-0 transition-transform duration-300 hover:scale-105`}>
        {/* Main Circle background */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular outer track */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={light ? '#ffffff' : '#302EB5'}
            strokeWidth="3"
            fill={light ? 'rgba(255, 255, 255, 0.05)' : 'rgba(48, 46, 181, 0.04)'}
          />
          {/* Inner dotted border */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={light ? '#ffffff' : '#302EB5'}
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.6"
          />
          
          {/* Architectural House / Roof outline integrated with stylized "F" */}
          <path
            d="M50 22L76 43H66V74H34V43H24L50 22Z"
            stroke={light ? '#ffffff' : '#302EB5'}
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
            opacity="0.3"
          />

          {/* Premium Bold "F" monogram with architectural clean edges */}
          <path
            d="M38 35H62V43H46V50H58V58H46V72H38V35Z"
            fill={light ? '#ffffff' : '#302EB5'}
            stroke={light ? '#ffffff' : '#302EB5'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Accent dot representing precision engineering */}
          <circle
            cx="62"
            cy="50"
            r="4.5"
            fill="#302EB5"
            className={`${light ? 'fill-white' : 'fill-brand-blue'}`}
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display font-bold tracking-tight ${currentSize.text} ${
              light ? 'text-white' : 'text-brand-navy'
            }`}
          >
            FAULKNER
          </span>
          <span
            className={`text-[9px] font-semibold tracking-[0.25em] uppercase mt-0.5 ${
              light ? 'text-white/70' : 'text-brand-blue font-medium'
            }`}
          >
            RENOVATIONS
          </span>
        </div>
      )}
    </div>
  );
}
