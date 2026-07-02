const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const MAX_EMAIL_LENGTH = 254;

// Deliberately not named anything resembling "website"/"url"/"company" —
// browser and password-manager autofill (LastPass, 1Password, Chrome) target
// those field names by heuristic regardless of CSS visibility, which was
// silently triggering the honeypot and short-circuiting real signups before
// they ever reached Resend.
export const HONEYPOT_FIELD_NAME = '_hp_confirm';

export function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false;
  return EMAIL_REGEX.test(email);
}

export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, MAX_EMAIL_LENGTH);
}

// In-memory rate limiter (per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per window

export function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Clean up stale entries every 100 checks
  if (rateLimitMap.size > 100) {
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}
