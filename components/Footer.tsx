import Link from 'next/link';
import { Clock, MapPin, Phone } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="cafe-font text-4xl font-bold">Cafe Dungaa</h2>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            {siteConfig.tagline} A modern cafe website with reservations, member login and customer-friendly mobile pages.
          </p>
          <div className="mt-6">
            <SocialLinks variant="light" />
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.2em] text-caramel">Visit</h3>
          <div className="mt-4 space-y-3 text-white/75">
            <p className="flex gap-3"><MapPin size={20} className="shrink-0 text-caramel" /> {siteConfig.address}</p>
            <p className="flex gap-3"><Clock size={20} className="shrink-0 text-caramel" /> {siteConfig.hours}</p>
            <p className="flex gap-3"><Phone size={20} className="shrink-0 text-caramel" /> {siteConfig.phone}</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.2em] text-caramel">Pages</h3>
          <div className="mt-4 grid gap-2 text-white/75">
            <Link href="/menu" className="hover:text-caramel">Menu</Link>
            <Link href="/about" className="hover:text-caramel">About</Link>
            <Link href="/gallery" className="hover:text-caramel">Gallery</Link>
            <Link href="/contact" className="hover:text-caramel">Contact</Link>
            <Link href="/sign-in" className="hover:text-caramel">Sign In</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Cafe Dungaa. All rights reserved.
      </div>
    </footer>
  );
}
