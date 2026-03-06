import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="relative text-primary overflow-hidden"
      style={{
        backgroundImage: 'url(/footer-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Warm cream overlay */}
      <div className="absolute inset-0 bg-cream/85" />

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/fiberZ-logo.png"
                alt="FiberZ Logo"
                width={140}
                height={46}
                className="h-10 w-auto"
              />
              <p className="mt-4 text-sm text-primary/70 leading-relaxed max-w-xs">
                Premium daily soluble fiber designed to support digestive health and help meet recommended daily fiber intake.
              </p>
            </div>

            {/* Shop & Learn */}
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">
                Shop &amp; Learn
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/product', label: 'Shop FiberZ' },
                  { href: '/how-it-works', label: 'How It Works' },
                  { href: '/research', label: 'Scientific Research' },
                  { href: '/faq', label: 'FAQs' },
                  { href: '/blog', label: 'Blog' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-primary/70 hover:text-brand transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">
                Support
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '#contact', label: 'Contact Us' },
                  { href: '/shipping', label: 'Shipping & Returns' },
                  { href: '/terms-of-use', label: 'Terms of Service' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/disclaimer', label: 'Disclaimer' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-primary/70 hover:text-brand transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-primary/70">
                <p className="font-semibold text-primary">Fidelinka Skrob d.o.o.</p>
                <p>Cantavirski Put 1, Subtoica, Serbia</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@fiberz.com" className="hover:text-brand transition-colors">
                    info@fiberz.com
                  </a>
                </p>
                <p>Phone: +381 63 10777 08</p>
                <p>Mon-Fri: 9:00 - 17:00</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary/20">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-5">
            <p className="text-center text-xs text-primary/60">
              &copy; All rights reserved. FiberZ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
