/**
 * Central source of truth for FiberZ legal entity / contact details.
 * Used across the footer, contact popup, legal pages, and structured data.
 *
 * Required to be public under Serbian commercial law (Zakon o privrednim društvima)
 * — name, address, PIB and Matični broj must appear on the website.
 */
export const COMPANY = {
  legalName: 'Fidelinka Skrob d.o.o.',
  brandName: 'FiberZ',
  addressLine: 'Cantavirski Put 1',
  city: 'Subotica',
  postalCode: '24000',
  country: 'Serbia',
  pib: '104205610',
  matBr: '20114517',
  email: 'info@fiberz.com',
  phone: '+381 63 10777 08',
  phoneHref: '+381631077708',
  workingHours: 'Mon-Fri: 9:00 - 17:00',
} as const;

export const fullAddress = `${COMPANY.addressLine}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}`;
