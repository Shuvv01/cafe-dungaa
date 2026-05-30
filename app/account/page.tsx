import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { CalendarDays, Gift, HeartHandshake, UserRound } from 'lucide-react';
import LogoutButton from '@/components/LogoutButton';
import { authCookieName, verifySessionToken } from '@/lib/auth';

export const metadata = {
  title: 'Member Account | Cafe Dungaa'
};

export default function AccountPage() {
  const user = verifySessionToken(cookies().get(authCookieName)?.value);
  if (!user) redirect('/sign-in');

  return (
    <div className="bg-cream pt-20">
      <section className="section-y">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-leaf">Member Area</p>
              <h1 className="cafe-font mt-4 text-5xl font-bold text-espresso sm:text-6xl">Welcome, {user.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-espresso/70">
                Your customer account is protected with an HTTP-only session cookie. Book faster, track rewards, and get
                member-only updates.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#reserve" className="primary-button">
                  Reserve Again
                </Link>
                <LogoutButton />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: UserRound, title: 'Profile', text: user.email },
                { icon: CalendarDays, title: 'Next Booking', text: 'No upcoming reservation yet.' },
                { icon: Gift, title: 'Rewards', text: '2 stamps saved toward your next coffee.' },
                { icon: HeartHandshake, title: 'Preference', text: 'Window seats and quieter corners.' }
              ].map((item) => (
                <div key={item.title} className="surface p-5">
                  <item.icon className="text-leaf" size={26} />
                  <h2 className="mt-4 font-bold text-espresso">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-espresso/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
