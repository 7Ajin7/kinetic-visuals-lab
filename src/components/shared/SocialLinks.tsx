
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  size?: number;
  gap?: number;
}

// Custom Artstation icon component with more accurate SVG path
const ArtstationIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.77 16.88l1.66 2.89c.38.65 1.07 1.06 1.83 1.06h12.88c.77 0 1.45-.42 1.84-1.08l4.15-7.29c.27-.48.27-1.07.01-1.55l-1.66-3.03c-.39-.72-1.13-1.15-1.95-1.15h-3.18l4.56 7.53H1.77z" />
      <path d="M15.68 7.74L5.16 18.25H1.77l10.54-10.51h3.37z" />
      <path d="M14.2 7.74L9.97 14.84h4.72l2.85-4.99-3.34-2.11z" />
    </svg>
  );
};

// Custom Behance icon component with more accurate SVG path
const BehanceIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8.5h-5M14.5 13.5h-5m0 0C7 13.5 7 11.5 9.5 11.5c-1.5-2 1-4 3-2m-7 2h1m13 0h-1"/>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 16.5C8 15.5 9 14.5 11 14.5c2 0 3 1 3 2.5C14 18.5 13 19.5 11 19.5C9 19.5 8 18.5 8 16.5Z"/>
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
