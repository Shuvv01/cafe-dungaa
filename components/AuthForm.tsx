'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2, LockKeyhole, ShieldCheck, UserPlus } from 'lucide-react';
import { siteConfig } from '@/data/site';

type AuthMode = 'login' | 'register';

type AuthFormProps = {
  mode: AuthMode;
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const isRegister = mode === 'register';
  const Icon = isRegister ? UserPlus : LockKeyhole;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { message?: string } | null;
      setStatus('error');
      setMessage(data?.message ?? 'Authentication failed. Please try again.');
      return;
    }

    const data = (await response.json()) as { user?: { role?: string } };
    router.push(data.user?.role === 'admin' ? '/admin' : '/account');
    router.refresh();
  }

  return (
    <div className="surface mx-auto max-w-xl p-6 sm:p-8">
      <div className="mb-7 flex items-center gap-3">
        <div className="rounded-lg bg-leaf/10 p-3 text-leaf">
          <Icon size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-espresso">{isRegister ? 'Create member account' : 'Sign in securely'}</h1>
          <p className="mt-1 text-sm text-espresso/60">
            {isRegister ? 'Join the customer club for faster bookings.' : 'Access member perks or admin controls.'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {isRegister ? <input name="name" className="input-field" placeholder="Full name" minLength={2} required /> : null}
        <input name="email" type="email" className="input-field" placeholder="Email address" required />
        <input name="password" type="password" className="input-field" placeholder="Password" minLength={isRegister ? 8 : 6} required />

        <button type="submit" className="primary-button mt-2 w-full" disabled={status === 'loading'}>
          {status === 'loading' ? <Loader2 className="mr-2 animate-spin" size={18} /> : null}
          {isRegister ? 'Create Account' : 'Sign In'}
          {status !== 'loading' ? <ArrowRight className="ml-2" size={18} /> : null}
        </button>
      </form>

      {status === 'error' ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">{message}</p>
      ) : null}

      <div className="mt-6 rounded-lg bg-mist p-4 text-sm leading-6 text-espresso/70">
        <p className="flex items-center gap-2 font-bold text-espresso">
          <ShieldCheck size={17} className="text-leaf" /> Demo credentials
        </p>
        <p className="mt-2">
          Member: use any email with a 6+ character password. Admin: {siteConfig.adminEmail} with password from ADMIN_PASSWORD
          env, or the local demo fallback.
        </p>
      </div>

      <p className="mt-6 text-center text-sm text-espresso/65">
        {isRegister ? 'Already a member?' : 'New customer?'}{' '}
        <Link href={isRegister ? '/sign-in' : '/register'} className="font-bold text-leaf hover:text-coffee">
          {isRegister ? 'Sign in' : 'Create an account'}
        </Link>
      </p>
    </div>
  );
}
