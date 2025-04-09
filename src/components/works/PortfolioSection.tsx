
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import DetailModal from '../shared/DetailModal';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  tools: string[];
  description?: string;
  gallery?: string[];
}

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Abstract Fluidity",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1633293928675-841273025782",
      tools: ["Blender", "Substance Painter"],
      description: "An exploration of fluid dynamics and abstract forms rendered in 3D. This project investigates the boundaries between liquid and solid states.",
      gallery: [
        "https://images.unsplash.com/photo-1633293928675-841273025782",
        "https://images.unsplash.com/photo-1639762681057-408e52192e55",
      ],
    },
    {
      id: 2,
      title: "Tech Revolution",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      tools: ["After Effects", "Cinema 4D"],
      description: "A motion graphics piece exploring the rapid evolution of technology and its impact on modern society.",
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        "https://images.unsplash.com/photo-1563089145-599997674d42",
      ],
    },
    {
      id: 3,
      title: "Future City",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      tools: ["Blender", "Unreal Engine"],
      description: "A futuristic cityscape visualizing architectural concepts for sustainable urban environments.",
      gallery: [
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99",
      ],
    },
    {
      id: 4,
      title: "Liquid Transition",
      category: "VFX",
      thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796",
      tools: ["Houdini", "Nuke"],
      description: "Advanced visual effects simulation of fluid transitions using procedural dynamics and volumetric rendering.",
      gallery: [
        "https://images.unsplash.com/photo-1619983081563-430f63602796",
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
      ],
    },
    {
      id: 5,
      title: "Brand Anthem",
      category: "Commercials",
      thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
      tools: ["After Effects", "Premiere Pro"],
      description: "A dynamic commercial piece created for a tech brand showcasing their product line with bold typography and smooth transitions.",
      gallery: [
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
        "https://images.unsplash.com/photo-1526666923127-b2970f64b422",
      ],
    },
    {
      id: 6,
      title: "Geometric Dreams",
      category: "Passion Projects",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      tools: ["Cinema 4D", "Octane Render"],
      description: "A personal exploration of geometric forms and patterns, rendered with high-quality materials and lighting.",
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7",
      ],
    },
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
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <section className="py-20" ref={sectionRef}>
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 reveal">
          Selected <span className="text-gradient-1">Works</span>
        </h2>
        
        <div className="flex flex-wrap gap-3 mb-10 reveal" style={{ transitionDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 rounded-sm text-sm transition-all duration-300",
                filter === category
                  ? "bg-accent1 text-white"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
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
              className="group relative bg-black/20 rounded-sm overflow-hidden border border-white/5 hover-trigger cursor-pointer"
              onClick={() => openModal(item)}
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
                    <span key={tool} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <DetailModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          title={selectedProject.title}
          variant="project"
        >
          <div className="h-full overflow-y-auto p-6">
            {selectedProject.gallery?.map((image, index) => (
              <div key={index} className="mb-6">
                <img 
                  src={image} 
                  alt={`${selectedProject.title} - image ${index + 1}`}
                  className="w-full h-auto rounded-sm border border-white/10"
                />
              </div>
            ))}
          </div>
          <div className="h-full p-6 border-l border-accent1/20 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <span className="text-xs font-medium text-accent1 uppercase tracking-wider mb-4">
              {selectedProject.category}
            </span>
            <p className="text-muted-foreground mb-6">
              {selectedProject.description}
            </p>
            <div className="mt-auto">
              <h3 className="text-sm font-medium mb-2">Tools Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span key={tool} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DetailModal>
      )}
    </section>
  );
};

export default PortfolioSection;
