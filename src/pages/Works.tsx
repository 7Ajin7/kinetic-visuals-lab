import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Eye, AlertTriangle, CornerDownRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import AnimatedBackground from '../components/shared/AnimatedBackground';
import DetailModal from '../components/shared/DetailModal';
import SciFiElements from '../components/shared/SciFiElements';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tools: string[];
  videoUrl?: string;
  images?: string[];
}

const Works = () => {
  const [filter, setFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  
  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "Abstract Fluidity",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1633293928675-841273025782",
      description: "An experimental 3D project exploring the interaction of light with abstract fluid forms. This piece focuses on creating organic, flowing shapes that convey movement and emotion through color and form.",
      tools: ["Blender", "Substance Painter"],
      images: [
        "https://images.unsplash.com/photo-1633293928675-841273025782",
        "https://images.unsplash.com/photo-1633701871345-8598aa5f381d"
      ]
    },
    {
      id: 2,
      title: "Tech Revolution",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      description: "A dynamic motion graphics sequence designed for a technology conference opener. The animation visually represents the concept of digital transformation through abstract geometric elements and flowing data visualizations.",
      tools: ["After Effects", "Cinema 4D"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Future City",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      description: "A detailed 3D environment depicting a futuristic cityscape. This project focuses on architectural visualization, lighting design, and atmospheric effects to create an immersive urban scene set in the near future.",
      tools: ["Blender", "Unreal Engine"],
      images: [
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
      ]
    },
    {
      id: 4,
      title: "Liquid Transition",
      category: "VFX",
      thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796",
      description: "A series of fluid simulation visual effects created for commercial use. These transitions utilize advanced particle systems and fluid dynamics to create seamless, organic scene changes for video content.",
      tools: ["Houdini", "Nuke"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Brand Anthem",
      category: "Commercials",
      thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
      description: "A comprehensive motion graphics package developed for a major brand campaign. This project included animated logo sequences, typographic animations, and visual effects designed to establish a cohesive brand identity across multiple platforms.",
      tools: ["After Effects", "Premiere Pro"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Geometric Dreams",
      category: "Passion Projects",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      description: "A personal artistic exploration of geometric forms, light, and space. This project combines procedural generation techniques with artistic direction to create hypnotic, dream-like sequences that blur the line between mathematics and art.",
      tools: ["Cinema 4D", "Octane Render"],
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        "https://images.unsplash.com/photo-1620121684840-edffcfc4b878"
      ]
    },
    {
      id: 7,
      title: "Particle Symphony",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1607499699372-8b851d15b5d5",
      description: "An audiovisual experience that synchronizes particle animations with musical elements. Each visual component reacts to specific aspects of the soundtrack, creating a harmonious relationship between sound and motion.",
      tools: ["After Effects", "Trapcode Particular"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "Cosmic Journey",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
      description: "A 3D space visualization project depicting an artistic interpretation of cosmic phenomena. This piece combines scientifically accurate elements with creative license to create awe-inspiring views of nebulae, stars, and celestial bodies.",
      tools: ["Blender", "Photoshop"],
      images: [
        "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
      ]
    },
    {
      id: 9,
      title: "Product Evolution",
      category: "Commercials",
      thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42",
      description: "A commercial animation showcasing the evolution of a product design. This project utilized advanced morphing techniques and photorealistic rendering to demonstrate the product's development journey in an engaging visual narrative.",
      tools: ["Cinema 4D", "After Effects"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const categories = [
    'all',
    '3D Art',
    'Motion Graphics',
    'VFX',
    'Commercials',
    'Passion Projects'
  ];
  
  const filteredItems = filter === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === filter);

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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <div className="relative">
          <AnimatedBackground />
          <div className="relative z-10 pt-32 pb-16">
            <div className="container px-4">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal">
                  My <span className="text-gradient-1">Works</span>
                </h1>
                
                <p className="text-muted-foreground max-w-2xl mb-12 reveal" style={{ transitionDelay: '200ms' }}>
                  Explore my portfolio of projects spanning 3D art, motion graphics, visual effects, and commercial work. Each piece represents a unique creative challenge and technical achievement.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-10 reveal" style={{ transitionDelay: '300ms' }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={cn(
                      "px-4 py-2 text-sm transition-all duration-300 border",
                      filter === category
                        ? "bg-accent1 text-white border-accent1"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border-white/10"
                    )}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '400ms' }}>
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative bg-black/20 overflow-hidden border border-white/5 hover-trigger cursor-pointer"
                    onClick={() => setSelectedWork(item)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs font-medium text-accent1 uppercase tracking-wider mb-2">{item.category}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-white/10 px-2 py-1">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        className="mt-4 px-4 py-2 border border-accent1/50 bg-black/50 text-white flex items-center justify-center hover:bg-accent1/20 transition-colors"
                      >
                        <Eye size={16} className="mr-2" /> View Project
                      </button>
                    </div>
                    
                    <div className="absolute top-4 left-4 flex space-x-1">
                      <div className="size-2 bg-accent1 animate-pulse-slow"></div>
                      <div className="size-2 bg-accent2 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Project Detail Modal */}
      {selectedWork && (
        <DetailModal
          isOpen={!!selectedWork}
          onClose={() => setSelectedWork(null)}
          title={selectedWork.title}
          variant="project"
        >
          {/* Left Side - Images/Videos */}
          <div className="h-full overflow-auto scrollbar-none border-r border-accent1/10 p-6">
            {selectedWork.videoUrl ? (
              <div className="aspect-video overflow-hidden mb-6">
                <iframe 
                  className="w-full h-full"
                  src={selectedWork.videoUrl} 
                  title={selectedWork.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : selectedWork.images && (
              <div className="space-y-4">
                {selectedWork.images.map((image, idx) => (
                  <div key={idx} className="relative group">
                    <img 
                      src={image} 
                      alt={`${selectedWork.title} - Image ${idx + 1}`}
                      className="w-full border border-accent1/10"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 text-xs font-mono">
                      {idx + 1}/{selectedWork.images?.length}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Right Side - Info */}
          <div className="p-6 overflow-y-auto scrollbar-none">
            <div className="mb-1 flex items-center text-xs font-mono text-accent1">
              <div className="size-2 bg-accent1 mr-2"></div>
              <span>{selectedWork.category}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display">
              {selectedWork.title}
            </h2>
            
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <CornerDownRight size={16} className="mr-2 text-accent1" />
                Project Details
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedWork.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <CornerDownRight size={16} className="mr-2 text-accent1" />
                Software Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedWork.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3 py-1 bg-white/5 border border-accent1/20 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center text-xs text-muted-foreground">
                <AlertTriangle size={12} className="mr-1 text-accent3" />
                <span>Project ID: {selectedWork.id.toString().padStart(4, '0')}</span>
              </div>
            </div>
          </div>
        </DetailModal>
      )}
      
      <Footer />
    </div>
  );
};

export default Works;
