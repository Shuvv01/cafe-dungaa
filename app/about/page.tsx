import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'About | Cafe Dungaa'
};

const values = ['Cozy seating', 'Friendly service', 'Local ingredients', 'Secure member flow'];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-cream section-y">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="About"
              title="A calm cafe corner for Lalitpur"
              description="Cafe Dungaa brings coffee, comfort plates and calm seating together for everyday meetups, study sessions, dates and small celebrations in Jwagal."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-lg bg-white p-4 font-semibold text-leaf shadow-sm">{value}</div>
              ))}
            </div>
          </div>
          <div className="surface overflow-hidden">
            <Image
              src="/images/cafe-hero.png"
              alt="Warm cafe table with coffee and momo"
              width={1728}
              height={880}
              className="h-[440px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-pad max-w-4xl">
          <h2 className="cafe-font text-4xl font-bold text-espresso">Built for customer growth</h2>
          <p className="mt-5 leading-8 text-espresso/70">
            The site guides visitors from discovery to action: see the atmosphere, check dishes, sign in as a member, reserve a table and open the exact location without friction.
          </p>
          <p className="mt-5 rounded-lg bg-cream p-5 font-semibold leading-7 text-coffee">
            Public profile: {siteConfig.tagline} · {siteConfig.hours}
          </p>
        </div>
      </section>
    </div>
  );
}
