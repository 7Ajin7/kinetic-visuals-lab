
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const skills = [
    { name: 'Blender', level: 95 },
    { name: 'After Effects', level: 90 },
    { name: 'Cinema 4D', level: 85 },
    { name: 'Houdini', level: 80 },
    { name: 'Unreal Engine', level: 75 },
    { name: 'Substance Designer', level: 70 },
  ];

  return (
    <section className="py-20 bg-black/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-8 reveal"
          >
            About <span className="text-gradient-1">Me</span>
          </h2>
          
          <div 
            ref={textRef}
            className="space-y-6 text-muted-foreground reveal"
            style={{ transitionDelay: '200ms' }}
          >
            <p>
              I'm Ajin Abraham Daniel, a passionate 3D artist and motion designer with a keen eye for detail and a love for creating immersive visual experiences. My work combines technical precision with artistic expression to bring ideas to life through movement and form.
            </p>
            
            <p>
              With expertise in industry-standard tools and a background in both commercial and artistic projects, I specialize in creating compelling visual narratives that engage and inspire audiences. My approach is collaborative, detail-oriented, and focused on delivering high-quality results that exceed expectations.
            </p>
            
            <p>
              Whether it's crafting stunning 3D environments, designing fluid animations, or producing eye-catching visual effects, I bring creativity and technical skill to every project. I'm constantly exploring new techniques and pushing the boundaries of what's possible in digital art and motion design.
            </p>
          </div>
          
          <div 
            ref={skillsRef}
            className="mt-12 reveal"
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent1 rounded-full"
                      style={{ 
                        width: `${skill.level}%`, 
                        transition: 'width 1s ease-in-out' 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
