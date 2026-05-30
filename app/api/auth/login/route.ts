import { NextResponse } from 'next/server';
import { authCookieName, buildUser, createSessionToken, getDemoAdminPassword } from '@/lib/auth';
import { siteConfig } from '@/data/site';

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;
  const email = body.email?.trim().toLowerCase() ?? '';
  const password = body.password ?? '';

  if (!email || !password) {
    return NextResponse.json({ ok: false, message: 'Email and password are required.' }, { status: 400 });
  }

  const isAdmin = email === siteConfig.adminEmail;
  const validMember = password.length >= 6;
  const validAdmin = isAdmin && password === getDemoAdminPassword();

  if ((isAdmin && !validAdmin) || (!isAdmin && !validMember)) {
    return NextResponse.json({ ok: false, message: 'Invalid email or password.' }, { status: 401 });
  }

  const user = buildUser(isAdmin ? 'Cafe Dungaa Admin' : 'Cafe Dungaa Member', email, isAdmin ? 'admin' : 'member');
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
