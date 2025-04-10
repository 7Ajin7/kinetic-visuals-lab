
import React, { useState } from 'react';
import { ArrowRight, Eye, AlertTriangle, CornerDownRight } from 'lucide-react';
import DetailModal from '../shared/DetailModal';

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

const PortfolioSection = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  
  const featuredWorks: WorkItem[] = [
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
      tools: ["Blender", "Maya"],
      images: [
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
      ]
    }
  ];
  
  return (
    <section id="works" className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold reveal">
              Selected <span className="text-gradient-1">Works</span>
            </h2>
            <a 
              href="/works" 
              className="hidden md:flex items-center text-sm hover-trigger link-underline"
            >
              View All Projects
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {featuredWorks.map((work, index) => (
              <div
                key={work.id}
                className="group relative bg-black/20 overflow-hidden border border-white/5 hover-trigger cursor-pointer reveal"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onClick={() => setSelectedWork(work)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-accent1 uppercase tracking-wider mb-2">{work.category}</span>
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <button 
                    className="mt-4 px-3 py-1.5 border border-accent1/50 bg-black/50 text-white flex items-center justify-center hover:bg-accent1/20 transition-colors"
                  >
                    <Eye size={14} className="mr-2" /> View Details
                  </button>
                </div>
                
                <div className="absolute top-4 left-4 flex space-x-1">
                  <div className="size-2 bg-accent1 animate-pulse-slow"></div>
                  <div className="size-2 bg-accent2 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center md:hidden">
            <a 
              href="/works" 
              className="inline-flex items-center text-sm hover-trigger link-underline"
            >
              View All Projects
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      
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
    </section>
  );
};

export default PortfolioSection;
