'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

const LOCALE_LABELS: Record<string, string> = {
  sr: 'Srpski',
  en: 'English',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const next = locale === 'sr' ? 'en' : 'sr';

  function toggle() {
    startTransition(() => {
      router.replace(pathname, { locale: next as 'sr' | 'en' });
    });
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label={`Switch to ${LOCALE_LABELS[next]}`}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand text-brand text-sm font-semibold font-montserrat hover:bg-brand/5 transition-colors disabled:opacity-60"
    >
      <Image src="/localization.png" alt="" width={18} height={18} />
      <span>{LOCALE_LABELS[locale]}</span>
      <span className="text-xs leading-none">›</span>
    </button>
  );
}
