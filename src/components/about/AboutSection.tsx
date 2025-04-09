
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
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 glass-card">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  {/* Placeholder profile image with sci-fi frame */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent1/5 to-accent2/5"></div>
                    <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-accent1"></div>
                    <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-accent2"></div>
                    <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-accent2"></div>
                    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-accent1"></div>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-1/2 h-1/2 text-white/20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
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
            <div className="relative p-6 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm">
              <SciFiElements />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Experience & Education</h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-accent1/30">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border border-accent1 rounded-full"></div>
                  <div className="font-medium">Senior Motion Designer</div>
                  <div className="text-sm text-muted-foreground">Creative Studio XYZ • 2020 - Present</div>
                  <div className="text-sm mt-2">Lead motion graphics and 3D animation projects for clients across tech, entertainment, and lifestyle industries.</div>
                </div>
                
                <div className="relative pl-6 border-l border-accent1/30">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border border-accent1 rounded-full"></div>
                  <div className="font-medium">3D Artist & Animator</div>
                  <div className="text-sm text-muted-foreground">Digital Arts Agency • 2017 - 2020</div>
                  <div className="text-sm mt-2">Created 3D assets, animations, and visual effects for advertising campaigns and digital experiences.</div>
                </div>
                
                <div className="relative pl-6 border-l border-accent1/30">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border border-accent1 rounded-full"></div>
                  <div className="font-medium">BFA in Motion Media Design</div>
                  <div className="text-sm text-muted-foreground">University of Creative Arts • 2013 - 2017</div>
                  <div className="text-sm mt-2">Specialized in 3D animation and motion graphics with a minor in digital storytelling.</div>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border border-accent1 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <a 
                href="/about" 
                className="group flex items-center px-6 py-2.5 bg-white text-black hover:bg-accent1 hover:text-white rounded-sm transition-all duration-300 hover-trigger"
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
