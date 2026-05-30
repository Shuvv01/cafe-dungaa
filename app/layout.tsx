import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://cafedungaa.com'),
  title: {
    default: 'Cafe Dungaa | Coffee & Food in Jwagal, Lalitpur',
    template: '%s | Cafe Dungaa'
  },
  description: `${siteConfig.description} Reserve a table, view the menu, and sign in to the member area.`,
  keywords: ['Cafe Dungaa', 'Cafe Lalitpur', 'Jwagal cafe', 'Nepali restaurant', 'coffee Lalitpur'],
  openGraph: {
    title: 'Cafe Dungaa | Coffee & Food in Jwagal, Lalitpur',
    description: siteConfig.description,
    images: ['/images/cafe-hero.png'],
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
