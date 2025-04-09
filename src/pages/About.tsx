
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
      year: "2022 - Present",
      role: "Freelance 3D Artist & Motion Designer",
      description: "Working with global clients on various projects, specializing in 3D art, motion graphics, and visual effects."
    },
    {
      year: "2020 - 2022",
      role: "Senior Motion Designer at Creative Studio",
      description: "Led a team of designers to create award-winning motion graphics and VFX for advertising campaigns."
    },
    {
      year: "2018 - 2020",
      role: "Junior 3D Artist at Animation Studio",
      description: "Created 3D assets and animations for short films and commercial projects."
    },
    {
      year: "2015 - 2018",
      role: "BFA in Digital Arts & Animation",
      description: "Graduated with honors, specializing in 3D modeling and motion design."
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
                    <div className="glass-card p-6 rounded-lg">
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
                          <span>Houdini (Intermediate)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Unreal Engine (Intermediate)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent1 rounded-full mr-2"></div>
                          <span>Substance Designer/Painter (Intermediate)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="glass-card p-6 rounded-lg">
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
