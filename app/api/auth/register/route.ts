import { NextResponse } from 'next/server';
import { authCookieName, buildUser, createSessionToken } from '@/lib/auth';

type RegisterBody = {
  name?: string;
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterBody;
  const name = body.name?.trim() ?? '';
  const email = body.email?.trim().toLowerCase() ?? '';
  const password = body.password ?? '';

  if (name.length < 2) {
    return NextResponse.json({ ok: false, message: 'Please enter your full name.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, message: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ ok: false, message: 'Password must be at least 8 characters.' }, { status: 400 });
  }

  const user = buildUser(name, email, 'member');
  const response = NextResponse.json({ ok: true, user });

  response.cookies.set(authCookieName, createSessionToken(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
