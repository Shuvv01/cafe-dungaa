import Link from 'next/link';
import { ArrowRight, Clock, MapPin, ShieldCheck, Star } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-espresso pt-24 text-white">
      <div className="absolute inset-0 bg-[url('/images/cafe-hero.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/78 to-espresso/15" />

      <div className="container-pad relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.8fr] lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
            <Star size={16} className="fill-caramel text-caramel" /> Friendly neighborhood cafe in Jwagal
          </div>
          <h1 className="cafe-font text-5xl font-bold leading-none tracking-tight sm:text-7xl lg:text-8xl">
            Cafe Dungaa
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            {siteConfig.tagline} Reserve faster, explore the menu, and enjoy a warm cafe experience built for real customers.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/menu" className="primary-button">
              Explore Menu <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link href="/contact#reserve" className="secondary-button">
              Reserve Your Table
            </Link>
          </div>
          <div className="mt-6">
            <SocialLinks variant="light" />
          </div>
        </div>

        <div className="surface hidden bg-white/95 p-6 text-espresso backdrop-blur lg:block">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-leaf">Open for dine-in</p>
          <h2 className="cafe-font mt-3 text-4xl font-bold">Coffee, food and calm corners.</h2>
          <p className="mt-4 leading-7 text-espresso/70">
            A polished booking journey with quick contact, trust signals, and a protected member area.
          </p>
          <div className="mt-7 grid gap-3">
            {['Fresh momo and comfort plates', 'Member login and admin dashboard', 'Mobile-first reservation flow'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-mist p-3 font-semibold">
                <ShieldCheck size={18} className="text-leaf" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-7 border-t border-espresso/10 pt-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-coffee">
              <MapPin size={17} /> {siteConfig.address}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-coffee">
              <Clock size={17} /> {siteConfig.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
