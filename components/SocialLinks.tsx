import Link from 'next/link';
import { ExternalLink, Instagram, Music2 } from 'lucide-react';
import { siteConfig } from '@/data/site';

type SocialLinksProps = {
  variant?: 'dark' | 'light';
  showLabel?: boolean;
};

const links = [
  { href: siteConfig.instagram, label: 'Instagram', icon: Instagram },
  { href: siteConfig.tiktok, label: 'TikTok', icon: Music2 }
];

export default function SocialLinks({ variant = 'dark', showLabel = true }: SocialLinksProps) {
  const classes =
    variant === 'light'
      ? 'border-white/15 bg-white/10 text-white hover:bg-white hover:text-espresso'
      : 'border-espresso/10 bg-white text-espresso hover:bg-mist hover:text-leaf';

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition ${classes}`}
        >
          <item.icon size={17} />
          {showLabel ? item.label : null}
          <ExternalLink size={14} />
        </Link>
      ))}
    </div>
  );
}
