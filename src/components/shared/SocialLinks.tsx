
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  size?: number;
  gap?: number;
}

// Custom Artstation icon component with improved SVG path
const ArtstationIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19.5l9-16 9 16M4 19.5h15.5M10 19.5l3.5-6 3.5 6M2.5 19.5l9-16V10" />
    </svg>
  );
};

// Custom Behance icon component with improved SVG path
const BehanceIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12.5h6c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H1v6h6c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H1" />
      <path d="M16 6H13v12h3c1.7 0 3-1.3 3-3v-1c0-1-.5-1.9-1.4-2.4.9-.5 1.4-1.4 1.4-2.4v-1c0-1.2-1-2.2-3-2.2z" />
      <path d="M20 16v-1c0-.6-.4-1-1-1h-2" />
      <path d="M20 9v-1c0-.6-.4-1-1-1h-2" />
      <path d="M8 10h4" />
    </svg>
  );
};

const SocialLinks: React.FC<SocialLinksProps> = ({ className, iconSize = 20, size, gap }) => {
  // If size is provided, use it instead of iconSize (for backward compatibility)
  const finalIconSize = size || iconSize;
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ajin-abraham-daniel-99023024a/',
      icon: <Linkedin size={finalIconSize} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/7_ajin_7',
      icon: <Instagram size={finalIconSize} />,
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/ajinabraham5',
      icon: <BehanceIcon size={finalIconSize} />,
    },
    {
      name: 'ArtStation',
      url: 'https://www.artstation.com/ajinabrahamdaniel7',
      icon: <ArtstationIcon size={finalIconSize} />,
    },
  ];

  return (
    <div className={cn('flex', gap ? `gap-${gap}` : 'gap-4', className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-trigger text-muted-foreground hover:text-foreground transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
