
import React from 'react';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  size?: number;
  gap?: number;
}

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
      icon: <ExternalLink size={finalIconSize} />,
    },
    {
      name: 'ArtStation',
      url: 'https://www.artstation.com/ajinabrahamdaniel7',
      icon: <ExternalLink size={finalIconSize} />,
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
