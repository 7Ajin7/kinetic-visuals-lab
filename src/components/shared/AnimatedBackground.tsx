
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
        
        {/* Scanning line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden sci-fi-scanner"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
