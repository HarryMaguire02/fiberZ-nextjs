'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription
    setEmail('');
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

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="font-montserrat text-sm text-body placeholder:text-body/40 bg-white border border-body/20 rounded-full px-5 py-2.5 w-full sm:w-auto sm:flex-1 outline-none focus:border-brand transition-colors"
            />
            <button
              type="submit"
              className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-6 py-2.5 hover:bg-brand-dark transition-colors shrink-0"
            >
              Subscription
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
