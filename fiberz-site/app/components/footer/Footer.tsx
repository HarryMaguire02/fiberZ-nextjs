import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/app/lib/company';
import PaymentMethods from './PaymentMethods';

export default function Footer() {
  return (
    <footer
      className="relative text-brand overflow-hidden font-roboto"
      style={{
        backgroundImage: 'url(/footer-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Designer gradient overlay: grey → warm beige → golden */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(245,241,232,0.88) 0%, rgba(230,214,174,0.82) 32%, rgba(212,183,106,0.72) 100%)',
        }}
      />

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Image
                src="/fiberZ-logo-footer.png"
                alt="FiberZ Logo"
                width={261}
                height={72}
                className="h-10 md:h-14 lg:h-16"
                style={{ width: 'auto' }}
              />
              <p className="mt-4 text-sm text-body leading-relaxed max-w-xs">
                Premium daily soluble fiber designed to support digestive health and help meet recommended daily fiber intake.
              </p>
              <div className="mt-6">
                <PaymentMethods />
              </div>
            </div>

            {/* Shop & Learn */}
            <div>
              <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-5">
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
                    <Link href={link.href} className="text-sm text-body hover:text-body/70 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-5">
                Support
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/shipping', label: 'Shipping & Returns' },
                  { href: '/terms-of-use', label: 'Terms of Service' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/disclaimer', label: 'Disclaimer' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-body/70 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-5">
                Contact
              </h3>
              <address className="not-italic space-y-2 text-sm text-body">
                <p className="font-semibold text-heading">{COMPANY.legalName}</p>
                <p>{COMPANY.addressLine}, {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}</p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-body/70 transition-colors">
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-body/70 transition-colors">
                    {COMPANY.phone}
                  </a>
                </p>
                <p>{COMPANY.workingHours}</p>
                <p>
                  Tax ID: {COMPANY.pib}
                </p>
                <p>  
                  Registration No: {COMPANY.matBr}
                </p>
              </address>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-content mx-auto border-t border-body">
          <div className="px-6 sm:px-8 lg:px-12 py-5">
            <p className="text-center text-xs text-body">
              &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
