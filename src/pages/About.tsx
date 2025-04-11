
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import AnimatedBackground from '../components/shared/AnimatedBackground';

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
                
                {/* Added profile photo section */}
                <div className="my-10 reveal" style={{ transitionDelay: '100ms' }}>
                  <div className="max-w-md mx-auto relative">
                    <div className="aspect-[4/5] relative overflow-hidden glass-card">
                      <div className="absolute inset-0 bg-gradient-to-b from-accent1/5 to-accent2/5"></div>
                      <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-accent1"></div>
                      <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-accent2"></div>
                      <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-accent2"></div>
                      <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-accent1"></div>
                      <img 
                        src="/lovable-uploads/06d9d830-0f8a-42ef-9230-c0bfcc109087.png" 
                        alt="Ajin Abraham Daniel" 
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Scan line effect */}
                      <div className="absolute inset-0 sci-fi-scanner"></div>
                    </div>
                    {/* Tech frame elements */}
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b border-accent1/50"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t border-accent2/50"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground reveal" style={{ transitionDelay: '200ms' }}>
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
                
                <div className="mt-16 reveal" style={{ transitionDelay: '400ms' }}>
                  <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card p-6">
                      <h3 className="text-xl font-semibold mb-4">Software</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Blender (Advanced)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Adobe After Effects (Advanced)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Cinema 4D (Advanced)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Maya (Intermediate)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>3Ds Max (Intermediate)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>ZBrush (Advanced)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Embergen (Intermediate)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="glass-card p-6">
                      <h3 className="text-xl font-semibold mb-4">Skills</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent2 rounded-full mr-2"></div>
                          <span>3D Modeling & Texturing</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent2 rounded-full mr-2"></div>
                          <span>Animation & Motion Graphics</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent2 rounded-full mr-2"></div>
                          <span>Visual Effects (VFX)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent2 rounded-full mr-2"></div>
                          <span>Lighting & Rendering</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent2 rounded-full mr-2"></div>
                          <span>Particle Systems</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent2 rounded-full mr-2"></div>
                          <span>Compositing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                        
                        <div className="md:col-span-4">
                          <div className="absolute left-0 md:left-auto md:right-full top-1 md:mr-8 w-3 h-3 rounded-full bg-accent1"></div>
                          <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                          
                          {/* Connect dots with line except for the last item */}
                          {index < timelineItems.length - 1 && (
                            <div className="absolute left-1.5 top-6 bottom-0 w-px bg-accent1/30 md:hidden"></div>
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
