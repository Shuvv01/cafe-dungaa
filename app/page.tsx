import Link from 'next/link';
import { Coffee, Gift, MapPin, ShieldCheck, Sparkles, UsersRound, Utensils } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { siteConfig } from '@/data/site';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReservationForm from '@/components/ReservationForm';
import GoogleMap from '@/components/GoogleMap';
import InstagramFeed from '@/components/InstagramFeed';
import SectionHeader from '@/components/SectionHeader';

const highlights = [
  { icon: Coffee, title: 'Signature drinks', text: 'Masala chai, cold brew and specialty coffee for daily cafe lovers.' },
  { icon: Utensils, title: 'Local comfort food', text: 'Nepali favorites and fusion plates for lunch, snacks and evening bites.' },
  { icon: Sparkles, title: 'Designed to convert', text: 'Menu, reservation, social proof and location are easy to reach on every device.' }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white section-y">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Why Customers Choose Us"
            title="Everything a cafe visitor needs, fast"
            description="Clear menu previews, one-tap contact, reservation flow, trusted social links, and protected member access help visitors become repeat customers."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="surface p-6">
                <div className="mb-5 inline-flex rounded-lg bg-leaf/10 p-3 text-leaf">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-espresso">{item.title}</h3>
                <p className="mt-3 leading-7 text-espresso/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="container-pad grid gap-4 md:grid-cols-3">
          {[
            { icon: UsersRound, value: '4.8/5', label: 'Customer-ready trust score layout' },
            { icon: Gift, value: 'Member Club', label: 'Protected login and rewards area' },
            { icon: ShieldCheck, value: 'Admin Gate', label: 'Role-based dashboard access' }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm">
              <div className="rounded-lg bg-caramel/15 p-3 text-coffee">
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-espresso">{item.value}</p>
                <p className="text-sm font-semibold text-espresso/60">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MenuSection compact />

      <section className="bg-white section-y">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Reserve"
              title="Turn interest into a confirmed visit"
              description="The reservation experience is short, mobile-friendly and validated on the server, with a clear path to connect live notifications later."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-cream p-5 text-coffee">
                <MapPin size={22} />
                <p className="mt-3 font-semibold">{siteConfig.address}</p>
              </div>
              <div className="rounded-lg bg-mist p-5 text-leaf">
                <ShieldCheck size={22} />
                <p className="mt-3 font-semibold">{siteConfig.hours}</p>
              </div>
            </div>
          </div>
          <ReservationForm />
        </div>
      </section>

      <section className="bg-cream section-y">
        <div className="container-pad">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              align="left"
              eyebrow="Gallery"
              title="Let visitors feel the place before they arrive"
              description="Warm visuals and social links help customers trust the experience from search, Instagram, TikTok and shared links."
            />
            <div className="flex flex-col gap-3 sm:flex-row md:self-auto">
              <SocialLinks />
              <Link href="/gallery" className="primary-button self-start md:self-auto">View Gallery</Link>
            </div>
          </div>
          <InstagramFeed />
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-pad">
          <SectionHeader eyebrow="Location" title="Find us in Jwagal, Lalitpur" />
          <div className="mt-10">
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
