'use client';

import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/navigation';
import Header from './Header';
import ContactPopup from './ContactPopup';

export default function ScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isScrolled || isMobileMenuOpen
    ? 'bg-white/95 backdrop-blur-sm shadow-md'
    : isHome
      ? 'bg-transparent'
      : 'bg-white shadow-sm';

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={setIsMobileMenuOpen}
          onContactClick={() => setIsContactOpen(true)}
        />
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
