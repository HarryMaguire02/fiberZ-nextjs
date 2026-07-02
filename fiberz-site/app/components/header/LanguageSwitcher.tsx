'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('Nav');
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
      aria-label={t('switchTo', { locale: t(`localeLabels.${next}`) })}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand text-brand text-sm font-semibold font-montserrat hover:bg-brand/5 transition-colors disabled:opacity-60"
    >
      <Image src="/localization.png" alt="" width={18} height={18} />
      <span>{t(`localeLabels.${locale}`)}</span>
      <span className="text-xs leading-none">›</span>
    </button>
  );
}
