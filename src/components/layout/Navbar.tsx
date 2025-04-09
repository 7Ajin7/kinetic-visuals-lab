
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialLinks from '../shared/SocialLinks';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Works', path: '/works' },
    { title: 'Shop', path: '/shop' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    )}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-display tracking-tighter z-20">
          <span className="text-gradient-1">A.A.D</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-sm hover-trigger font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="h-4 border-l border-muted"></div>
          <SocialLinks className="flex items-center space-x-4" iconSize={18} />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="p-2 -m-2 md:hidden z-20 hover-trigger"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X size={24} className="text-foreground" /> : 
            <Menu size={24} className="text-foreground" />
          }
        </button>
        
        {/* Mobile Navigation */}
        <div className={cn(
          'fixed inset-0 z-10 bg-background flex flex-col items-center justify-center transition-all duration-300 md:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-xl font-medium hover-trigger"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
            <div className="w-40 border-t border-muted my-4"></div>
            <SocialLinks className="flex items-center space-x-6" iconSize={22} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
