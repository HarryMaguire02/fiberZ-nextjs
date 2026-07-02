/**
 * Central source of truth for FiberZ legal entity / contact details.
 * Used across the footer, contact popup, legal pages, and structured data.
 *
 * Required to be public under Serbian commercial law (Zakon o privrednim društvima)
 * — name, address, PIB and Matični broj must appear on the website.
 *
 * NOTE: working hours is display text, not a legal fact, so it lives in
 * messages/*.json (ContactPopup.workingHoursValue) instead of here — it's
 * the one exception to "update company.ts, not components".
 */
export const COMPANY = {
  legalName: 'Fidelinka Skrob d.o.o.',
  brandName: 'FiberZ',
  addressLine: 'Čantavirski put 1',
  city: 'Subotica',
  postalCode: '24000',
  country: 'Serbia',
  pib: '104205610',
  matBr: '20114517',
  email: 'info@fiberz.com',
  phone: '+381 63 10777 08',
  phoneHref: '+381631077708',
} as const;

export const fullAddress = `${COMPANY.addressLine}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}`;
