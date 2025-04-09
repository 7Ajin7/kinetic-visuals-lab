
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../shared/AnimatedBackground';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 reveal"
            style={{ transitionDelay: '200ms' }}
          >
            <span className="block">Ajin Abraham Daniel</span>
          </h1>
          
          <h2 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl font-display text-gradient-1 mb-6 reveal"
            style={{ transitionDelay: '400ms' }}
          >
            3D Artist & Motion Designer
          </h2>
          
          <p 
            ref={textRef}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 reveal"
            style={{ transitionDelay: '600ms' }}
          >
            Crafting bold visuals and kinetic stories through design and movement.
          </p>
          
          <div 
            ref={ctaRef}
            className="reveal"
            style={{ transitionDelay: '800ms' }}
          >
            <Link 
              to="/works" 
              className="inline-flex items-center px-6 py-3 bg-accent1 hover:bg-accent1/80 text-white font-medium rounded-sm transition-all duration-300 hover-trigger"
            >
              View My Work
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-1.5 animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
