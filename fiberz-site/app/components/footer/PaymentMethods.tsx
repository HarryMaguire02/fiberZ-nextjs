import { getTranslations } from 'next-intl/server';

/**
 * Payment method badges shown in the footer.
 *
 * NOTE: These are placeholder text badges. After AllSecure onboarding,
 * replace each pill with the official Visa / Mastercard / Maestro / DinaCard /
 * Apple Pay / Google Pay logos provided by AllSecure (they have a brand kit).
 * Brand names themselves are proper nouns and stay untranslated.
 */
const methods = ['Visa', 'Mastercard', 'Maestro', 'DinaCard', 'Apple Pay', 'Google Pay'];

export default async function PaymentMethods() {
  const t = await getTranslations('Footer');

  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-3">
        {t('weAccept')}
      </p>
      <ul className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
        {methods.map((label) => (
          <li
            key={label}
            className="px-2.5 py-1 rounded bg-white/70 border border-body/20 text-[11px] font-semibold text-heading"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
