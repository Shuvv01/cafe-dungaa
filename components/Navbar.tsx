'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogIn, Menu, UserRound, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/account', label: 'Account' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-espresso/10 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="group" onClick={() => setIsOpen(false)}>
          <span className="cafe-font block text-2xl font-bold tracking-tight text-coffee sm:text-3xl">Cafe Dungaa</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-leaf">Jwagal, Lalitpur</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active ? 'bg-mist text-leaf' : 'text-espresso/70 hover:bg-mist hover:text-leaf'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/sign-in" className="ml-2 light-button px-4 py-2 text-sm">
            <LogIn className="mr-2" size={16} />
            Sign In
          </Link>
          <Link href="/contact#reserve" className="primary-button px-4 py-2 text-sm">
            Reserve
          </Link>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="rounded-lg border border-espresso/10 p-2 text-espresso md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-espresso/10 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-espresso hover:bg-mist"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/sign-in" onClick={() => setIsOpen(false)} className="light-button mt-2">
              <UserRound className="mr-2" size={18} />
              Sign In
            </Link>
            <Link href="/contact#reserve" onClick={() => setIsOpen(false)} className="primary-button mt-2">
              Reserve Your Table
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
