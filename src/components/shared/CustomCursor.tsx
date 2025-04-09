
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
        followerRef.current.style.left = `${position.x}px`;
        followerRef.current.style.top = `${position.y}px`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Run animation frame for smoother follower movement
    const animationId = requestAnimationFrame(function animate() {
      updateCursor();
      requestAnimationFrame(animate);
    });

    // Add 'custom-cursor' class to the body
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
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
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, transform 0.15s ease-out, width 0.2s ease, height 0.2s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;
