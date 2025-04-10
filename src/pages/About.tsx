
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import AnimatedBackground from '../components/shared/AnimatedBackground';
import SoftwareExpertise from '../components/shared/SoftwareExpertise';

const About = () => {
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

  // Career timeline data
  const timelineItems = [
    {
      year: "July 2024 - April 2025",
      role: "Tron Digital - Creative Lead - 3D/CG Artist",
      description: "Leading creative projects and developing high-quality 3D assets and animations."
    },
    {
      year: "February 2023 - July 2024",
      role: "Aviram Studios - 3D Artist and Motion Graphic Designer",
      description: "Created 3D assets and motion graphics for various commercial and artistic projects."
    },
    {
      year: "Dec 2021 - Jan 2022",
      role: "Infocom Software Pvt. Ltd. - 3D Artist Intern",
      description: "Developed 3D models and assets for software applications and visual media."
    },
    {
      year: "June - July 2021",
      role: "Thinkdots Media Productions - Motion Graphic Designer Intern",
      description: "Designed motion graphics for digital media and advertising campaigns."
    },
    {
      year: "2019 - 2022",
      role: "B.A. Animation and Visual Effects",
      description: "Studied animation principles, visual effects techniques, and digital art creation."
    },
    {
      year: "2019 - Present",
      role: "Freelance",
      description: "Working with global clients on various projects, specializing in 3D art, motion graphics, and visual effects."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <div className="relative">
          <AnimatedBackground />
          <div className="relative z-10 pt-32 pb-16">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal">
                  About <span className="text-gradient-1">Me</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 reveal" style={{ transitionDelay: '100ms' }}>
                  <div className="md:col-span-1">
                    <div className="relative aspect-[4/5] overflow-hidden border border-white/10 glass-card">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <img 
                            src="/lovable-uploads/11116b2c-9b50-46c3-9c89-1fd904a943cb.png" 
                            alt="Ajin Abraham Daniel" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="space-y-6 text-muted-foreground">
                      <p className="text-lg">
                        I'm Ajin Abraham Daniel, a passionate 3D artist and motion designer with a keen eye for detail and a love for creating immersive visual experiences. My work combines technical precision with artistic expression to bring ideas to life through movement and form.
                      </p>
                      
                      <p>
                        With expertise in industry-standard tools and a background in both commercial and artistic projects, I specialize in creating compelling visual narratives that engage and inspire audiences. My approach is collaborative, detail-oriented, and focused on delivering high-quality results that exceed expectations.
                      </p>
                      
                      <p>
                        Whether it's crafting stunning 3D environments, designing fluid animations, or producing eye-catching visual effects, I bring creativity and technical skill to every project. I'm constantly exploring new techniques and pushing the boundaries of what's possible in digital art and motion design.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 reveal" style={{ transitionDelay: '400ms' }}>
                  <SoftwareExpertise />
                </div>
                
                <div className="mt-16 reveal" style={{ transitionDelay: '600ms' }}>
                  <h2 className="text-2xl font-bold mb-8">Career Timeline</h2>
                  
                  <div className="space-y-12">
                    {timelineItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start"
                      >
                        <div className="md:col-span-1 mb-4 md:mb-0 font-mono text-accent1">
                          {item.year}
                        </div>
                        
                        <div className="md:col-span-4 relative">
                          <div className="absolute left-0 md:left-auto md:right-full top-1 md:mr-8 w-3 h-3 rounded-full bg-black border border-accent1"></div>
                          <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                          
                          {/* Connect dots with line */}
                          {index < timelineItems.length - 1 && (
                            <div className="absolute left-1.5 top-6 bottom-[-36px] w-px bg-accent1 md:hidden"></div>
                          )}
                          
                          {/* Vertical line for desktop */}
                          {index < timelineItems.length - 1 && (
                            <div className="hidden md:block absolute right-full top-6 bottom-[-48px] w-px bg-accent1 md:mr-9.5"></div>
                          )}
                        </div>
                      </div>
                    ))}
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

export default About;
