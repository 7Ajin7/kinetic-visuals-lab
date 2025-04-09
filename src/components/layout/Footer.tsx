
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../shared/SocialLinks';
import BackToTop from '../shared/BackToTop';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 relative">
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link to="/" className="text-2xl font-display tracking-tighter">
              <span className="text-gradient-1">Ajin Abraham Daniel</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm max-w-xs">
              3D Artist & Motion Designer creating bold visuals and kinetic stories.
            </p>
          </div>
          
          <div className="flex flex-col md:items-center md:justify-center">
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                About Me
              </Link>
              <Link to="/works" className="block text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Portfolio
              </Link>
              <Link to="/shop" className="block text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Shop
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <SocialLinks className="flex space-x-4 mb-6" />
            <div className="mt-auto">
              <a 
                href="mailto:ajinabrahamdaniel7@gmail.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                ajinabrahamdaniel7@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ajin Abraham Daniel. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Crafted with passion for design & motion
          </p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;
