'use client';

import { useEffect } from 'react';
import { COMPANY } from '@/app/lib/company';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close contact"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-linen shadow-2xl overflow-hidden font-roboto">
        {/* Header band */}
        <div
          className="px-6 py-5"
          style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="contact-popup-title"
                className="font-cormorant text-2xl lg:text-3xl text-white font-bold leading-tight"
              >
                Get in Touch
              </h2>
              <p className="text-white/90 text-sm mt-1">
                We&apos;re here to help — reach out any time.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white flex items-center justify-center text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-1">
              Email
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-body hover:text-brand transition-colors break-all"
            >
              {COMPANY.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-1">
              Phone
            </p>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="text-body hover:text-brand transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-1">
              Working Hours
            </p>
            <p className="text-body">{COMPANY.workingHours}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-1">
              Address
            </p>
            <address className="not-italic text-body">
              {COMPANY.legalName}
              <br />
              {COMPANY.addressLine}
              <br />
              {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
