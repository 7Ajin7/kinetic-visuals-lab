
import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Grid lines for sci-fi feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95">
        <div className="absolute inset-0 opacity-10 scan-lines"></div>
        
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
        
        {/* Corner elements */}
        <div className="absolute top-5 left-5 w-20 h-20 border-l-2 border-t-2 border-accent1/30 opacity-50"></div>
        <div className="absolute top-5 right-5 w-20 h-20 border-r-2 border-t-2 border-accent2/30 opacity-50"></div>
        <div className="absolute bottom-5 left-5 w-20 h-20 border-l-2 border-b-2 border-accent2/30 opacity-50"></div>
        <div className="absolute bottom-5 right-5 w-20 h-20 border-r-2 border-b-2 border-accent1/30 opacity-50"></div>
        
        {/* Additional sci-fi elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32">
          <div className="absolute w-full h-full border border-accent1/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 border border-accent2/20 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-10 w-40 h-40">
          <div className="absolute w-full h-full border border-accent2/10 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
          <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 border border-accent1/15 rounded-full"></div>
        </div>
        
        {/* Circuit-like lines */}
        <svg className="absolute top-1/3 left-0 w-32 h-32 text-accent1/10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,40 Q25,15 50,40 T100,40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        
        <svg className="absolute bottom-1/3 right-0 w-32 h-32 text-accent2/10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q25,75 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,60 Q25,85 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0,40 Q25,65 50,40 T100,40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        
        {/* Scanning line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden sci-fi-scanner"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
