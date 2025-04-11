
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialLinks from '../shared/SocialLinks';
import SciFiElements from '../shared/SciFiElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/works', label: 'Works' },
    { path: '/shop', label: 'Shop' },
    { path: '/contact', label: 'Contact' }
  ];
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-background/80 backdrop-blur-lg shadow-sm' : 'py-5'
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold font-display tracking-tighter hover-trigger relative">
          <span className="relative z-10">Ajin Abraham Daniel</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent1 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm hover-trigger transition-colors relative ${
                  isActive(item.path)
                    ? 'text-accent1'
                    : 'text-foreground hover:text-accent1'
                }`}
              >
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent1"></span>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover-trigger"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] bg-background z-30 md:hidden animate-fade-in">
          <div className="container px-4 py-8 mx-auto">
            <nav className="flex flex-col gap-6 items-center">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl hover-trigger transition-colors relative ${
                    isActive(item.path)
                      ? 'text-accent1'
                      : 'text-foreground hover:text-accent1'
                  } animate-slide-in`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-12 flex justify-center animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <SocialLinks size={24} gap={6} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
