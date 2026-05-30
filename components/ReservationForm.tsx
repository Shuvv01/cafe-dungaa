'use client';

import { useState } from 'react';
import { CalendarCheck, Loader2, ShieldCheck } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  message: ''
};

export default function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Reservation request failed');
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form id="reserve" onSubmit={handleSubmit} className="surface mx-auto max-w-2xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-leaf/10 p-3 text-leaf">
          <CalendarCheck size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-espresso">Reservation Request</h3>
          <p className="text-sm text-espresso/60">Quick request with server-side validation.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          type="text"
          placeholder="Your name"
          className="input-field"
          required
        />
        <input
          value={form.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          type="tel"
          placeholder="Phone number"
          className="input-field"
          required
        />
        <input
          value={form.date}
          onChange={(event) => updateField('date', event.target.value)}
          type="date"
          className="input-field"
          required
        />
        <input
          value={form.time}
          onChange={(event) => updateField('time', event.target.value)}
          type="time"
          className="input-field"
          required
        />
        <input
          value={form.guests}
          onChange={(event) => updateField('guests', event.target.value)}
          type="number"
          min="1"
          max="20"
          placeholder="Number of guests"
          className="input-field sm:col-span-2"
          required
        />
        <textarea
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          placeholder="Special request, birthday note, preferred seating..."
          className="input-field min-h-32 resize-none sm:col-span-2"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'loading' ? <Loader2 className="mr-2 animate-spin" size={18} /> : null}
        {status === 'loading' ? 'Sending...' : 'Confirm Reservation'}
      </button>

      {status === 'success' ? (
        <p className="mt-4 rounded-lg bg-green-50 p-4 text-sm font-semibold text-green-700">
          Reservation request sent. The cafe team can connect this to email, WhatsApp, Google Sheets, or a database next.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="mt-4 rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-700">
          Something went wrong. Please check your local server and try again.
        </p>
      ) : null}
      <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-espresso/55">
        <ShieldCheck size={15} className="text-leaf" /> Customers can also sign in for faster future bookings.
      </p>
    </form>
  );
}
