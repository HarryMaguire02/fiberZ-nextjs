'use client';

import { useState, useCallback } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterSignup() {
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
        body: JSON.stringify({ email, _website: honeypot }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
        clearStatus();
      } else {
        setStatus('error');
        setMessage(data.message || 'We are having trouble connecting to the server. Please try again later.');
        clearStatus();
      }
    } catch {
      setStatus('error');
      setMessage('We are having trouble connecting to the server. Please try again later.');
      clearStatus();
    }
  };

  return (
    <section className="bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center pb-12 lg:pb-16 pt-12 lg:pt-16">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-4">
            Stay Up to Date with the Latest Articles
          </h2>
          <p className="font-montserrat text-body text-sm leading-relaxed mb-8">
            Subscribe to our newsletter and receive the best tips directly in your inbox
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
              {/* Honeypot field — hidden from humans, bots auto-fill it */}
              <input
                type="text"
                name="_website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === 'loading'}
                className="font-montserrat text-sm text-body placeholder:text-body/40 bg-white border border-body/20 rounded-full px-5 py-2.5 w-full sm:w-auto sm:flex-1 outline-none focus:border-brand transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-6 py-2.5 hover:bg-brand-dark transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
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
