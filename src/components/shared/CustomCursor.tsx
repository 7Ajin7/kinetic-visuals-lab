
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updatePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add 'custom-cursor' class to the body
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
    }
    
    if (followerRef.current) {
      followerRef.current.style.left = `${position.x}px`;
      followerRef.current.style.top = `${position.y}px`;
    }
  }, [position, isMounted]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed z-[999] pointer-events-none w-6 h-6 rounded-full mix-blend-difference bg-white"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease'
        }}
      />
      <div
        ref={followerRef}
        className="cursor-follower fixed z-[998] pointer-events-none w-10 h-10 rounded-full mix-blend-difference bg-accent1/30"
        style={{
          opacity: isVisible ? 0.5 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, transform 0.15s ease-out, width 0.2s ease, height 0.2s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;
