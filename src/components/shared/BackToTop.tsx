
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={cn(
        'fixed right-6 bottom-6 p-3 rounded-sm border border-accent1/30 bg-black/80 backdrop-blur-sm hover:bg-accent1/20 transition-all duration-300 hover-trigger z-40',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="text-white" />
      <span className="absolute top-0 left-0 w-full h-0.5 bg-accent1 origin-left transform scale-x-0 transition-transform hover:scale-x-100"></span>
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-accent1 origin-right transform scale-x-0 transition-transform hover:scale-x-100"></span>
    </button>
  );
};

export default BackToTop;
