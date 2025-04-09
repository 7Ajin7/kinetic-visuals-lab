
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  tools: string[];
}

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Abstract Fluidity",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1633293928675-841273025782",
      tools: ["Blender", "Substance Painter"]
    },
    {
      id: 2,
      title: "Tech Revolution",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      tools: ["After Effects", "Cinema 4D"]
    },
    {
      id: 3,
      title: "Future City",
      category: "3D Art",
      thumbnail: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      tools: ["Blender", "Unreal Engine"]
    },
    {
      id: 4,
      title: "Liquid Transition",
      category: "VFX",
      thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796",
      tools: ["Houdini", "Nuke"]
    },
    {
      id: 5,
      title: "Brand Anthem",
      category: "Commercials",
      thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
      tools: ["After Effects", "Premiere Pro"]
    },
    {
      id: 6,
      title: "Geometric Dreams",
      category: "Passion Projects",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      tools: ["Cinema 4D", "Octane Render"]
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
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
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
              className="group relative bg-black/20 rounded-lg overflow-hidden border border-white/5 hover-trigger"
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
    </section>
  );
};

export default PortfolioSection;
