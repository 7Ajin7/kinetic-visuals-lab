
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/about/AboutSection';
import PortfolioSection from '../components/works/PortfolioSection';
import ShopSection from '../components/shop/ShopSection';
import ContactSection from '../components/contact/ContactSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import SciFiElements from '../components/shared/SciFiElements';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 50;
        
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <CustomCursor />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SciFiElements />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ShopSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
