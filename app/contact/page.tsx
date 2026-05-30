import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { siteConfig } from '@/data/site';
import GoogleMap from '@/components/GoogleMap';
import ReservationForm from '@/components/ReservationForm';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Contact | Cafe Dungaa'
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-espresso py-24 text-white">
        <div className="container-pad text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-caramel">Contact</p>
          <h1 className="cafe-font mt-4 text-5xl font-bold sm:text-7xl">Visit or reserve</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">Location, hours, social links and a fast reservation form in one mobile-friendly page.</p>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: MapPin, title: 'Address', text: `${siteConfig.address} · ${siteConfig.landmark}` },
              { icon: Phone, title: 'Phone', text: siteConfig.phone },
              { icon: Mail, title: 'Email', text: siteConfig.email },
              { icon: Clock, title: 'Opening Hours', text: siteConfig.hours }
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-cream p-6 shadow-sm">
                <item.icon className="text-leaf" size={28} />
                <h2 className="mt-4 font-bold text-espresso">{item.title}</h2>
                <p className="mt-1 text-espresso/65">{item.text}</p>
              </div>
            ))}
          <div className="surface p-6">
              <h2 className="font-bold text-espresso">Follow Cafe Dungaa</h2>
              <p className="mt-2 text-sm leading-6 text-espresso/65">Open Instagram and TikTok for latest posts, reels and food updates.</p>
              <div className="mt-4"><SocialLinks /></div>
            </div>
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Booking" title="Reserve your table" />
            <div className="mt-8">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream section-y">
        <div className="container-pad">
          <GoogleMap />
        </div>
      </section>
    </div>
  );
}
