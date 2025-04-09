
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SciFiElements from './SciFiElements';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  variant?: 'project' | 'product';
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isOpen, 
  onClose, 
  title,
  children,
  variant = 'project'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      <div 
        ref={modalRef}
        className={cn(
          "relative bg-background/95 border border-accent1/20 rounded-sm overflow-hidden w-full max-w-6xl max-h-[90vh] origin-center",
          "animate-[scale-in_0.4s_ease-out_forwards]", // Custom animation for sci-fi effect
          variant === 'product' ? 'h-[80vh]' : 'h-[85vh]'
        )}
        style={{
          animationName: 'scaleInY',
          animationDuration: '0.4s',
          animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          animationFillMode: 'forwards',
        }}
      >
        <SciFiElements variant="modal" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 z-10 border border-accent1/20 hover:border-accent1/50 hover-trigger transition-colors rounded-sm"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
        
        <div 
          className={cn(
            "relative z-10 grid h-full",
            "grid-cols-1 md:grid-cols-[1.2fr_0.8fr]"
          )}
        >
          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scaleInY {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DetailModal;
