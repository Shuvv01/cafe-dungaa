import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

const posts = [
  { image: '/images/coffee.svg', label: 'Fresh coffee moments', href: siteConfig.instagram },
  { image: '/images/food.svg', label: 'Food, snacks and comfort plates', href: siteConfig.instagram },
  { image: '/images/interior.svg', label: 'Cafe corners and everyday vibes', href: siteConfig.tiktok }
];

export default function InstagramFeed() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.label}
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group surface overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.label}
            width={640}
            height={420}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="flex items-center justify-between gap-3 p-4">
            <p className="font-semibold text-espresso">{post.label}</p>
            <ArrowUpRight className="shrink-0 text-coffee" size={20} />
          </div>
        </Link>
      ))}
    </div>
  );
}
