
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import AnimatedBackground from '../components/shared/AnimatedBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is a placeholder for actual form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <div className="relative">
          <AnimatedBackground />
          <div className="relative z-10 pt-32 pb-16">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal">
                  Get in <span className="text-gradient-1">Touch</span>
                </h1>
                
                <p className="text-muted-foreground max-w-2xl mb-12 reveal" style={{ transitionDelay: '200ms' }}>
                  I'm available for freelance work, collaborations, and commissions. Feel free to reach out if you'd like to work together on a project or have any questions.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 reveal" style={{ transitionDelay: '300ms' }}>
                  <div className="lg:col-span-3">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-accent1 focus:border-accent1 outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-accent1 focus:border-accent1 outline-none transition-all"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-accent1 focus:border-accent1 outline-none transition-all"
                          placeholder="Subject of your message"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-accent1 focus:border-accent1 outline-none transition-all resize-none"
                          placeholder="Your message"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-6 py-3 bg-accent1 hover:bg-accent1/80 text-white font-medium rounded-full transition-all duration-300 hover-trigger disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-8">
                    <div className="glass-card p-6 rounded-lg">
                      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent1/10 text-accent1">
                            <Mail size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <a 
                              href="mailto:ajinabrahamdaniel7@gmail.com" 
                              className="text-white hover:text-accent1 transition-colors"
                            >
                              ajinabrahamdaniel7@gmail.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent2/10 text-accent2">
                            <MapPin size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Location</p>
                            <p>Available Worldwide (Remote)</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent3/10 text-accent3">
                            <Clock size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Working Hours</p>
                            <p>Monday - Friday: 9am - 6pm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 rounded-lg">
                      <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
                      <p className="text-muted-foreground mb-6">
                        Connect with me on social media for the latest updates on my work and projects.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <a 
                          href="https://www.linkedin.com/in/ajin-abraham-daniel-99023024a/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0077B5" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                            </svg>
                          </div>
                          <span className="group-hover:text-[#0077B5] transition-colors">LinkedIn</span>
                        </a>
                        
                        <a 
                          href="https://www.instagram.com/7_ajin_7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E1306C]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E1306C" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <span className="group-hover:text-[#E1306C] transition-colors">Instagram</span>
                        </a>
                        
                        <a 
                          href="https://www.behance.net/ajinabraham5" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1769FF]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1769FF" viewBox="0 0 24 24">
                              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                            </svg>
                          </div>
                          <span className="group-hover:text-[#1769FF] transition-colors">Behance</span>
                        </a>
                        
                        <a 
                          href="https://www.artstation.com/ajinabrahamdaniel7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#13AFF0]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#13AFF0" viewBox="0 0 24 24">
                              <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
                            </svg>
                          </div>
                          <span className="group-hover:text-[#13AFF0] transition-colors">ArtStation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
