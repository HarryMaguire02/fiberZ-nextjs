import type { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  intro?: string;
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Shared layout for static legal pages (Terms, Privacy, Shipping, Disclaimer).
 * Provides a branded hero, the "last updated" line, and a constrained
 * prose container that all legal content renders into.
 */
export default function LegalPageLayout({ title, intro, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      {/* Hero band */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background: 'linear-gradient(to right, #D4AC77, #A6813F)',
        }}
      >
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 text-center">
          <h1 className="font-cormorant font-bold text-3xl lg:text-5xl leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="font-roboto text-white/90 text-base lg:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="bg-linen">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-20 font-roboto text-body">
          <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-8">
            Last updated: {lastUpdated}
          </p>
          <div className="legal-prose space-y-6 leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
