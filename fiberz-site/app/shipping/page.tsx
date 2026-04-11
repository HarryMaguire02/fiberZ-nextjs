import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPageLayout from '@/app/components/legal/LegalPageLayout';
import { COMPANY, fullAddress } from '@/app/lib/company';

export const metadata: Metadata = {
  title: 'Shipping & Returns | FiberZ',
  description:
    'FiberZ delivery times, shipping costs, return process and your statutory 14-day right of withdrawal under Serbian consumer protection law.',
  alternates: { canonical: '/shipping' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Shipping & Returns | FiberZ',
    description: 'Delivery, returns and refunds at FiberZ.',
    type: 'website',
    url: '/shipping',
  },
};

export default function ShippingPage() {
  return (
    <LegalPageLayout
      title="Shipping & Returns"
      intro="Everything you need to know about delivery, returns and refunds."
      lastUpdated="April 7, 2026"
    >
      <h2>1. Where we deliver</h2>
      <p>
        We currently deliver across the territory of the Republic of Serbia. International
        shipping options will be announced on this page once available.
      </p>

      <h2>2. Delivery times</h2>
      <p>
        Orders placed before 14:00 on a working day are normally dispatched the same day. Orders
        placed after 14:00, on weekends or public holidays are dispatched on the next working day.
      </p>
      <ul>
        <li><strong>Belgrade and major cities:</strong> 1–2 working days from dispatch.</li>
        <li><strong>Other locations in Serbia:</strong> 2–4 working days from dispatch.</li>
      </ul>
      <p>
        Delivery times are estimates provided by our courier partner and may vary slightly during
        peak periods or due to weather conditions.
      </p>

      <h2>3. Shipping costs</h2>
      <p>
        Shipping is calculated based on order weight and destination. The exact shipping cost is
        always shown at checkout before you confirm and pay for your order, so there are no
        hidden charges.
      </p>
      <p>
        We may offer free shipping promotions on orders above a certain value. Any active
        promotion is shown on the relevant product or checkout page.
      </p>

      <h2>4. Order tracking</h2>
      <p>
        Once your order is dispatched, you will receive a confirmation email containing the
        tracking number provided by the courier. You can use this number on the courier&rsquo;s
        website to track the delivery.
      </p>

      <h2>5. Receiving the parcel</h2>
      <p>
        Please inspect your parcel at the moment of delivery. If the packaging is visibly damaged
        or has been opened, you have the right to refuse delivery or to make a written note on
        the courier&rsquo;s receipt and contact us as soon as possible at{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>

      <h2>6. Right of withdrawal (14-day return)</h2>
      <p>
        Under the Serbian Law on Consumer Protection (<em>Zakon o zaštiti potrošača</em>), as a
        consumer you have the right to withdraw from a distance contract within{' '}
        <strong>14 days</strong> of receiving the goods, without giving any reason and without
        incurring any penalty.
      </p>
      <p>
        To exercise the right of withdrawal you must inform us of your decision by an unambiguous
        written statement (for example, an email to{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>) before the 14-day period
        expires. Please include your order number, the products you wish to return and your
        contact details.
      </p>

      <h3>Conditions for return</h3>
      <ul>
        <li>The product must be returned within 14 days of notifying us of the withdrawal.</li>
        <li>The product must be unused and in its original, unopened and undamaged packaging.</li>
        <li>The product must be returned together with all accompanying documentation.</li>
        <li>
          The product must be suitable for return — opened or used food supplements cannot be
          returned for hygiene and health protection reasons, in line with Article 37 of the
          Serbian Law on Consumer Protection.
        </li>
      </ul>

      <h3>Return shipping costs</h3>
      <p>
        The cost of returning the goods is borne by the customer, unless the return is due to a
        defect or our error (see &ldquo;Faulty or incorrect items&rdquo; below).
      </p>

      <h3>Refunds</h3>
      <p>
        We will refund the full purchase price (and the original standard delivery cost, where
        applicable) within <strong>14 days</strong> of receiving the returned goods, using the
        same payment method you used for the original transaction. No additional fees will be
        charged for the refund itself.
      </p>

      <h2>7. Faulty or incorrect items</h2>
      <p>
        If you receive a product that is faulty, damaged in transit or different from what you
        ordered, please contact us at{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> within 8 days of delivery,
        attaching photos where possible. We will arrange a replacement, repair or refund free of
        charge, in accordance with your statutory rights under Serbian consumer protection law.
      </p>

      <h2>8. How to send a return</h2>
      <p>Once we have confirmed your return, please send the parcel to:</p>
      <p>
        <strong>{COMPANY.legalName}</strong>
        <br />
        {fullAddress}
        <br />
        Reference: your order number
      </p>
      <p>
        We recommend using a trackable courier service. {COMPANY.legalName} cannot be held
        responsible for returned parcels that are lost in transit.
      </p>

      <h2>9. Complaints procedure</h2>
      <p>
        If you wish to submit a formal complaint about a product or our service, please send it in
        writing to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will acknowledge
        receipt within 8 days and provide a substantive response within 15 days, in accordance
        with the Serbian Law on Consumer Protection.
      </p>

      <h2>10. Contact</h2>
      <p>
        For any questions about delivery, returns or refunds, please contact us at{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or by phone at{' '}
        <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>. See also our{' '}
        <Link href="/terms-of-use">Terms of Service</Link>.
      </p>
    </LegalPageLayout>
  );
}
