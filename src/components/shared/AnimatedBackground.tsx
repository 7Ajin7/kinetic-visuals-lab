
import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95">
        <div className="absolute inset-0 opacity-10 scan-lines"></div>
        
        {/* Grid lines for sci-fi feel */}
        <div className="sci-fi-grid">
          {/* Horizontal grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px bg-white/5 w-full transform"
              style={{ top: `${5 * (i + 1)}vh` }}
            ></div>
          ))}
          
          {/* Vertical grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px bg-white/5 h-full transform"
              style={{ left: `${5 * (i + 1)}vw` }}
            ></div>
          ))}
        </div>
        
        {/* Abstract shapes inspired by the uploaded image */}
        {/* Circle elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-accent1/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent2/10 rounded-full"></div>
        
        {/* Plus symbols */}
        <svg className="absolute top-1/3 right-1/4 w-12 h-12 text-white/5" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-1/3 left-1/5 w-8 h-8 text-white/5" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1" />
        </svg>
        
        {/* Square elements */}
        <div className="absolute top-1/2 right-1/6 w-12 h-12 border border-white/5 rotate-45"></div>
        <div className="absolute bottom-1/6 left-1/3 w-8 h-8 border border-white/5"></div>
        
        {/* X marks */}
        <svg className="absolute top-2/3 right-1/3 w-10 h-10 text-accent1/10" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1" />
        </svg>
        
        {/* Triangle */}
        <svg className="absolute bottom-1/4 left-1/6 w-12 h-12 text-white/5" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Tech circles */}
        <div className="absolute top-1/5 right-1/5 opacity-10">
          <div className="w-16 h-16 border border-accent2/30 rounded-full relative">
            <div className="absolute inset-2 border border-accent2/50 rounded-full"></div>
            <div className="absolute inset-4 border border-accent2/70 rounded-full"></div>
            <div className="absolute inset-6 border border-accent2 rounded-full"></div>
          </div>
        </div>
        
        {/* Target marks */}
        <svg className="absolute bottom-1/3 right-1/6 w-14 h-14 text-white/5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        {/* Hexagon */}
        <svg className="absolute top-1/6 left-1/6 w-16 h-16 text-white/5" viewBox="0 0 24 24">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
        
        {/* Diamond */}
        <div className="absolute bottom-1/5 right-1/3 w-12 h-12 border border-white/5 rotate-45"></div>
        
        {/* Abstract tech lines */}
        <svg className="absolute top-2/5 left-1/8 w-32 h-8 text-accent1/5" viewBox="0 0 100 20">
          <path d="M0,10 L20,10 M30,5 L40,15 M50,15 L60,5 M70,10 L100,10" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="10" r="1" fill="currentColor" />
          <circle cx="70" cy="10" r="1" fill="currentColor" />
        </svg>
        
        {/* Data point markers */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-accent1 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent1 rounded-full"></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-accent1 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent2 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent2 rounded-full"></div>
        
        {/* Large corner elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-accent1/20 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-accent2/20 opacity-30"></div>
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden sci-fi-scanner"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
