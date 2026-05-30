import crypto from 'crypto';

export type UserRole = 'member' | 'admin';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export const authCookieName = 'cafe_dungaa_session';

const secret = process.env.AUTH_SECRET ?? 'replace-this-secret-before-production';

function base64Url(input: string) {
  return Buffer.from(input).toString('base64url');
}

function fromBase64Url(input: string) {
  return Buffer.from(input, 'base64url').toString('utf8');
}

function sign(payload: string) {
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}

export function createSessionToken(user: AuthUser) {
  const payload = base64Url(JSON.stringify({ ...user, issuedAt: Date.now() }));
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token?: string): AuthUser | null {
  if (!token) return null;

  const [payload, signature] = token.split('.');
  if (!payload || !signature || sign(payload) !== signature) return null;

  try {
    const user = JSON.parse(fromBase64Url(payload)) as AuthUser & { issuedAt?: number };
    if (!user.email || !user.name || !user.role) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
  } catch {
    return null;
  }
}

export function getDemoAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? 'DungaaAdmin2026!';
}

export function buildUser(name: string, email: string, role: UserRole): AuthUser {
  return {
    id: crypto.createHash('sha256').update(`${email}:${role}`).digest('hex').slice(0, 12),
    name,
    email: email.toLowerCase(),
    role
  };
}
