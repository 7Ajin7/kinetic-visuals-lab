
import React from 'react';
import { cn } from '@/lib/utils';

interface SoftwareItem {
  name: string;
  icon?: React.ReactNode;
  category: 'motion' | '3d' | 'design' | 'vfx' | 'game';
}

const SoftwareExpertise = () => {
  const software: SoftwareItem[] = [
    { name: 'After Effects', category: 'motion' },
    { name: 'Blender', category: '3d' },
    { name: 'Cinema 4D', category: '3d' },
    { name: 'Maya', category: '3d' },
    { name: '3Ds Max', category: '3d' },
    { name: 'ZBrush', category: '3d' }, // Added ZBrush
    { name: 'Embergen', category: 'vfx' },
    { name: 'Substance Painter', category: '3d' },
    { name: 'Photoshop', category: 'design' },
    { name: 'Illustrator', category: 'design' },
    { name: 'Premiere Pro', category: 'motion' },
    { name: 'DaVinci Resolve', category: 'motion' }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'motion': return 'border-accent1 text-accent1';
      case '3d': return 'border-accent2 text-accent2';
      case 'design': return 'border-accent3 text-accent3';
      case 'vfx': return 'border-purple-500 text-purple-500';
      case 'game': return 'border-green-500 text-green-500';
      default: return 'border-white/30 text-white/70';
    }
  };

  return (
    <div className="w-full py-8">
      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
        <span className="text-accent1 mr-2">⟨</span>
        Software Expertise
        <span className="text-accent1 ml-2">⟩</span>
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {software.map((item) => (
          <div
            key={item.name}
            className={cn(
              "border rounded-sm px-3 py-1.5 bg-white/5 hover:bg-white/10",
              "transition-all duration-300 hover-trigger",
              getCategoryColor(item.category)
            )}
          >
            <div className="font-mono text-sm">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-accent1 mr-1"></span>
          <span className="text-white/70">Motion Graphics</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-accent2 mr-1"></span>
          <span className="text-white/70">3D Design</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-accent3 mr-1"></span>
          <span className="text-white/70">Design</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-purple-500 mr-1"></span>
          <span className="text-white/70">VFX</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-green-500 mr-1"></span>
          <span className="text-white/70">Game Engines</span>
        </div>
      </div>
    </div>
  );
};

export default SoftwareExpertise;
