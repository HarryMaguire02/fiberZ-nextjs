'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
  isContactButton?: boolean;
  onContactClick?: () => void;
}

export default function NavLink({ href, label, isContactButton, onContactClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isContactButton) {
    return (
      <button
        onClick={onContactClick}
        className="px-6 py-2.5 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`text-sm font-medium tracking-wide transition-colors ${
        isActive ? 'text-brand' : 'text-body/70 hover:text-brand'
      }`}
    >
      {label}
    </Link>
  );
}
