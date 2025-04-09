
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollowerPosition = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const followerInterval = setInterval(updateFollowerPosition, 10);

    // Add 'custom-cursor' class to the body
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(followerInterval);
      document.body.classList.remove('custom-cursor');
    };
  }, [position]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        className="cursor"
        style={{
          opacity: isVisible ? 1 : 0,
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className="cursor-follower"
        style={{
          opacity: isVisible ? 0.5 : 0,
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`
        }}
      />
    </>
  );
};

export default CustomCursor;
