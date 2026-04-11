'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/product', label: 'PRODUCT' },
  { href: '/benefits', label: 'BENEFITS' },
  { href: '/research', label: 'RESEARCH' },
  { href: '/blog', label: 'BLOG' },
  { href: '/faq', label: 'FAQ' },
  { href: '#contact', label: 'CONTACT', isContactButton: true },
];

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: (open: boolean) => void;
  onContactClick: () => void;
}

export default function Header({ isMobileMenuOpen, onMobileMenuToggle, onContactClick }: HeaderProps) {
  const pathname = usePathname();

  const toggleMobileMenu = () => onMobileMenuToggle(!isMobileMenuOpen);
  const closeMobileMenu = () => onMobileMenuToggle(false);

  const handleContactClick = () => {
    closeMobileMenu();
    onContactClick();
  };

  return (
    <header className="w-full font-montserrat">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/fiberZ-logo-footer.png"
              alt="FiberZ Logo"
              width={120}
              height={40}
              priority
              style={{ width: '120px', height: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Navigation navLinks={navLinks} onContactClick={onContactClick} />

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-brand transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-1 pt-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.isContactButton) {
                return (
                  <button
                    key={link.href}
                    onClick={handleContactClick}
                    className="py-3 px-4 rounded-full text-sm font-semibold text-center text-white bg-brand hover:bg-brand-dark transition-colors"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`py-3 px-4 rounded-lg text-sm font-medium text-center ${
                    isActive
                      ? 'text-brand font-semibold'
                      : 'text-body'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
