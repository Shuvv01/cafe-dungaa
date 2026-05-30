import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BarChart3, CalendarCheck, ShieldCheck, UsersRound } from 'lucide-react';
import LogoutButton from '@/components/LogoutButton';
import { authCookieName, verifySessionToken } from '@/lib/auth';

export const metadata = {
  title: 'Admin Dashboard | Cafe Dungaa'
};

export default function AdminPage() {
  const user = verifySessionToken(cookies().get(authCookieName)?.value);
  if (!user) redirect('/sign-in');
  if (user.role !== 'admin') redirect('/account');

  return (
    <div className="bg-mist pt-20">
      <section className="section-y">
        <div className="container-pad">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-leaf">Authorization Protected</p>
              <h1 className="cafe-font mt-4 text-5xl font-bold text-espresso sm:text-6xl">Cafe Dashboard</h1>
              <p className="mt-4 max-w-2xl leading-8 text-espresso/70">
                Admin-only page for reservations, customer growth, and operational signals. Non-admin users are redirected.
              </p>
            </div>
            <LogoutButton />
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              { icon: CalendarCheck, label: 'Today Bookings', value: '12' },
              { icon: UsersRound, label: 'Members', value: '284' },
              { icon: BarChart3, label: 'Weekly Reach', value: '+18%' },
              { icon: ShieldCheck, label: 'Auth Status', value: 'Active' }
            ].map((item) => (
              <div key={item.label} className="surface p-5">
                <item.icon className="text-leaf" size={24} />
                <p className="mt-5 text-sm font-semibold text-espresso/55">{item.label}</p>
                <p className="mt-2 text-3xl font-bold text-espresso">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface overflow-hidden">
              <div className="border-b border-espresso/10 p-5">
                <h2 className="text-xl font-bold text-espresso">Recent Reservation Requests</h2>
              </div>
              <div className="divide-y divide-espresso/10">
                {[
                  ['Aarav Shrestha', '6 guests', 'Tonight, 6:30 PM'],
                  ['Maya Lama', '2 guests', 'Tomorrow, 1:00 PM'],
                  ['Nisha KC', '4 guests', 'Friday, 5:45 PM']
                ].map(([name, guests, time]) => (
                  <div key={name} className="grid gap-2 p-5 sm:grid-cols-3">
                    <p className="font-bold text-espresso">{name}</p>
                    <p className="text-espresso/65">{guests}</p>
                    <p className="font-semibold text-leaf">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface p-6">
              <h2 className="text-xl font-bold text-espresso">Growth Notes</h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-espresso/70">
                <p>Feature Instagram reels near the booking form to build trust from social traffic.</p>
                <p>Add a real database next so every booking appears here instead of demo dashboard data.</p>
                <p>Connect SMS or WhatsApp confirmation for higher reservation follow-through.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
