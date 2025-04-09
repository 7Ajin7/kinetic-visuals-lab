
import React from 'react';

interface SciFiElementsProps {
  variant?: 'header' | 'footer' | 'content' | 'modal';
}

const SciFiElements: React.FC<SciFiElementsProps> = ({ variant = 'content' }) => {
  if (variant === 'header') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-4 h-4 w-4 border-l-2 border-t-2 border-accent1"></div>
        <div className="absolute top-0 right-4 h-4 w-4 border-r-2 border-t-2 border-accent1"></div>
        <div className="absolute top-3 left-0 h-1 w-8 bg-accent1"></div>
        <div className="absolute top-3 right-0 h-1 w-8 bg-accent1"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-[8px] tracking-widest text-accent1 font-mono uppercase">
          system active
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute bottom-0 left-4 h-4 w-4 border-l-2 border-b-2 border-accent1"></div>
        <div className="absolute bottom-0 right-4 h-4 w-4 border-r-2 border-b-2 border-accent1"></div>
        <div className="absolute bottom-8 left-8 h-8 w-1 bg-accent2"></div>
        <div className="absolute bottom-2 left-0 w-full flex justify-center">
          <div className="h-1 w-16 bg-accent1/50"></div>
        </div>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-6 w-6 border-l-2 border-t-2 border-accent1"></div>
        <div className="absolute top-0 right-0 h-6 w-6 border-r-2 border-t-2 border-accent1"></div>
        <div className="absolute bottom-0 left-0 h-6 w-6 border-l-2 border-b-2 border-accent1"></div>
        <div className="absolute bottom-0 right-0 h-6 w-6 border-r-2 border-b-2 border-accent1"></div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="h-0.5 w-12 bg-accent1/50"></div>
        </div>
        
        <div className="absolute top-6 right-8 text-[8px] font-mono text-accent1/70">ID:237A-X</div>
        <div className="absolute bottom-6 left-8 text-[8px] font-mono text-accent1/70">SYS:ACTIVE</div>
      </div>
    );
  }

  // Content variant (default)
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute top-0 left-8 w-1 h-12 bg-accent2"></div>
      <div className="absolute top-0 right-8 w-1 h-12 bg-accent2"></div>
      
      <div className="absolute top-4 left-12 text-[8px] font-mono text-accent1 rotate-90">
        DATA:STREAM
      </div>
      
      <div className="absolute top-1/3 right-4 h-0.5 w-8 bg-accent1/50"></div>
      <div className="absolute top-1/3 left-4 h-0.5 w-8 bg-accent1/50"></div>
      
      <div className="absolute bottom-8 right-1/4 size-4 border border-accent2 rounded-full"></div>
      <div className="absolute top-1/4 left-10 size-2 border border-accent2 rounded-full"></div>
      
      <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-70">
        SYS.VER.2.4.0
      </div>
    </div>
  );
};

export default SciFiElements;
