'use client';

import { useState, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { HONEYPOT_FIELD_NAME } from '@/app/lib/validation';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterSignup() {
  const t = useTranslations('Research.Newsletter');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const clearStatus = useCallback((delay = 5000) => {
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, delay);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale, [HONEYPOT_FIELD_NAME]: honeypot }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
        clearStatus();
      } else {
        setStatus('error');
        setMessage(data.message || t('errorDefault'));
        clearStatus();
      }
    } catch {
      setStatus('error');
      setMessage(t('errorDefault'));
      clearStatus();
    }
  };

  return (
    <section className="bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center pb-12 lg:pb-16 pt-12 lg:pt-16">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="font-montserrat text-body text-sm leading-relaxed mb-8">
            {t('subtitle')}
          </p>

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="font-montserrat text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-6 py-3 max-w-md mx-auto"
            >
              {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
              {/* Honeypot field — hidden from humans, bots auto-fill it.
                  Positioned off-screen (not opacity/size-zero) and named to
                  avoid autofill heuristics — see HONEYPOT_FIELD_NAME comment. */}
              <input
                type="text"
                name={HONEYPOT_FIELD_NAME}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] top-0 w-px h-px overflow-hidden pointer-events-none"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                required
                disabled={status === 'loading'}
                className="font-montserrat text-sm text-body placeholder:text-body/40 bg-white border border-body/20 rounded-full px-5 py-2.5 w-full sm:w-auto sm:flex-1 outline-none focus:border-brand transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-6 py-2.5 hover:bg-brand-dark transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? t('subscribing') : t('button')}
              </button>
            </form>
          )}

          {status === 'error' && message && (
            <div
              role="alert"
              aria-live="polite"
              className="font-montserrat text-sm text-red-700 bg-red-50 border border-red-200 rounded-full px-6 py-2 max-w-md mx-auto mt-3"
            >
              {message}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
