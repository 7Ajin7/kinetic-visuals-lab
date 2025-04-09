
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = () => {
      if (cursorRef.current && followerRef.current) {
        // For the main cursor - direct positioning for responsiveness
        cursorRef.current.style.left = `${position.x}px`;
        cursorRef.current.style.top = `${position.y}px`;

        // For the follower - smooth positioning with transition
        requestAnimationFrame(() => {
          if (followerRef.current) {
            // LERP (Linear Interpolation) for smooth following
            const followerRect = followerRef.current.getBoundingClientRect();
            const currentX = followerRect.left + followerRect.width / 2;
            const currentY = followerRect.top + followerRect.height / 2;
            
            const dx = position.x - currentX;
            const dy = position.y - currentY;
            
            // Smoother following effect
            followerRef.current.style.transform = `translate(calc(-50% + ${dx * 0.15}px), calc(-50% + ${dy * 0.15}px))`;
            followerRef.current.style.left = `${position.x}px`;
            followerRef.current.style.top = `${position.y}px`;
          }
        });
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Run animation frame for smooth follower movement
    const animationFrame = setInterval(updateCursor, 1000 / 60); // Approx. 60fps

    // Add 'custom-cursor' class to the body
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(animationFrame);
      document.body.classList.remove('custom-cursor');
    };
  }, [position]);

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
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;
