
import React from 'react';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  size?: number;
  gap?: number;
}

// Custom Artstation icon component
const ArtstationIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19.5h12l3-6 3 6h2m-16 0L12 4l6 15.5m-16 0l4-7.5h16l-4 7.5" />
    </svg>
  );
};

// Custom Behance icon component
const BehanceIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h6c.65 0 1.26.32 1.62.84A2.5 2.5 0 0 1 7.5 14H3zm0 5h7a2.5 2.5 0 0 0 0-5" />
      <path d="M16 9h6a2.5 2.5 0 0 1 0 5h-6M16 14h4a2.5 2.5 0 0 0 2.5-2.5" />
      <path d="M14 8h7m-7 8h7" />
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
