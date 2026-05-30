import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { authCookieName, verifySessionToken } from '@/lib/auth';

export async function GET() {
  const user = verifySessionToken(cookies().get(authCookieName)?.value);
  return NextResponse.json({ ok: Boolean(user), user });
}
