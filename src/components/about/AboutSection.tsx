
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SoftwareExpertise from '../shared/SoftwareExpertise';
import SciFiElements from '../shared/SciFiElements';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  // Career timeline items
  const timelineItems = [
    {
      year: "July 2024 - April 2025",
      role: "Tron Digital",
      position: "Creative Lead - 3D/CG Artist"
    },
    {
      year: "February 2023 - July 2024",
      role: "Aviram Studios",
      position: "3D Artist and Motion Graphic Designer"
    },
    {
      year: "Dec 2021 - Jan 2022",
      role: "Infocom Software Pvt. Ltd.",
      position: "3D Artist Intern"
    },
    {
      year: "June - July 2021",
      role: "Thinkdots Media Productions",
      position: "Motion Graphic Designer Intern"
    },
    {
      year: "2019 - 2022",
      role: "B.A. Animation and Visual Effects",
      position: "Education"
    },
    {
      year: "2019 - Present",
      role: "Freelance",
      position: "Independent Work"
    }
  ];

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <SciFiElements variant="about" />
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal">
            About <span className="text-gradient-1">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 glass-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Profile image with sci-fi frame */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent1/5 to-accent2/5"></div>
                    <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-accent1"></div>
                    <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-accent2"></div>
                    <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-accent2"></div>
                    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-accent1"></div>
                    <img 
                      src="/lovable-uploads/06d9d830-0f8a-42ef-9230-c0bfcc109087.png" 
                      alt="Ajin Abraham Daniel" 
                      className="w-full h-full object-cover"
                    />
                    {/* Scan line effect */}
                    <div className="absolute inset-0 sci-fi-scanner"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="reveal" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground mb-6">
                  I'm Ajin Abraham Daniel, a 3D Artist and Motion Designer based in [Your Location]. I specialize in creating bold visual narratives through the fusion of design and motion.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  With a background in graphic design and a passion for animation, I've developed a unique approach to visual storytelling that combines technical precision with artistic vision. My work spans from commercial projects for global brands to experimental personal explorations.
                </p>
                
                <p className="text-muted-foreground mb-8">
                  I'm driven by the challenge of translating complex ideas into clear, compelling visual experiences. Whether it's crafting realistic 3D environments or designing abstract motion pieces, I focus on creating work that resonates emotionally while achieving strategic objectives.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-10 reveal" style={{ transitionDelay: '400ms' }}>
            <SoftwareExpertise />
          </div>
          
          <div className="reveal relative" style={{ transitionDelay: '600ms' }}>
            <div className="relative p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
              <SciFiElements />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Experience & Education</h3>
              
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l border-accent1/30">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border border-accent1"></div>
                    <div className="font-medium">{item.position}</div>
                    <div className="text-sm text-muted-foreground">{item.role} • {item.year}</div>
                    
                    {/* Connect dots with line except for the last item */}
                    {index < timelineItems.length - 1 && (
                      <div className="absolute left-0 top-6 bottom-0 w-px bg-accent1"></div>
                    )}
                  </div>
                ))}
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border border-accent1"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <a 
                href="/about" 
                className="group flex items-center px-6 py-2.5 bg-white text-black hover:bg-accent1 hover:text-white transition-all duration-300 hover-trigger"
              >
                More About Me
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
