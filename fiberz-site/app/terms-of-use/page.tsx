import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPageLayout from '@/app/components/legal/LegalPageLayout';
import { COMPANY, fullAddress } from '@/app/lib/company';

export const metadata: Metadata = {
  title: 'Terms of Service | FiberZ',
  description:
    'Terms of Service governing the use of the FiberZ website and the purchase of FiberZ products. Read before placing an order.',
  alternates: { canonical: '/terms-of-use' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms of Service | FiberZ',
    description: 'Terms of Service for FiberZ.',
    type: 'website',
    url: '/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      intro="The rules that govern your use of the FiberZ website and any purchases made through it."
      lastUpdated="April 7, 2026"
    >
      <h2>1. About these Terms</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website fiberz.com
        (the &ldquo;Website&rdquo;) and the purchase of products offered by{' '}
        <strong>{COMPANY.legalName}</strong> (&ldquo;FiberZ&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing the Website or placing an order, you
        confirm that you have read, understood and accepted these Terms.
      </p>
      <p>
        These Terms are drafted in accordance with the laws of the Republic of Serbia, including
        the Law on Consumer Protection (<em>Zakon o zaštiti potrošača</em>), the Law on Electronic
        Commerce (<em>Zakon o elektronskoj trgovini</em>) and the Law on Obligations
        (<em>Zakon o obligacionim odnosima</em>).
      </p>

      <h2>2. Company information</h2>
      <p>
        <strong>{COMPANY.legalName}</strong>
        <br />
        Registered office: {fullAddress}
        <br />
        Tax ID (PIB): {COMPANY.pib}
        <br />
        Company registration number (Matični broj): {COMPANY.matBr}
        <br />
        Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        <br />
        Phone: <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
      </p>

      <h2>3. Products and pricing</h2>
      <p>
        FiberZ sells dietary fiber products intended for general consumer use. Product
        descriptions, ingredients and nutritional information are provided on each product page.
        We make reasonable efforts to ensure all information is accurate, but minor variations may
        occur due to updates from our manufacturer.
      </p>
      <p>
        All prices are displayed in Serbian Dinars (RSD) and include the applicable Value Added
        Tax (VAT) where required by law. Delivery costs are shown separately at checkout before
        you confirm your order.
      </p>
      <p>
        We reserve the right to change prices at any time. The price applicable to your order is
        the one shown at the moment of order confirmation.
      </p>

      <h2>4. Placing an order</h2>
      <p>
        To place an order you must be at least 18 years old and have legal capacity to enter into
        a binding contract. By submitting an order you make a binding offer to purchase the
        selected products under these Terms.
      </p>
      <p>
        A purchase contract is formed only once we send you an order confirmation by email. We
        reserve the right to refuse or cancel any order, including in cases of suspected fraud,
        incorrect pricing, or unavailability of stock. If we cancel an order for which payment has
        already been processed, we will issue a full refund.
      </p>

      <h2>5. Payment</h2>
      <p>
        We accept the following payment methods through our payment service provider: Visa,
        Mastercard, Maestro, DinaCard, Apple Pay and Google Pay. All card payments are processed
        on a secure (PCI DSS compliant) payment page provided by our payment service provider.
        FiberZ does not store full card details on its own servers.
      </p>
      <p>
        For every successful purchase, an electronic fiscal receipt will be generated in
        accordance with the Serbian Law on Fiscalization (<em>Zakon o fiskalizaciji</em>) and sent
        to you by email.
      </p>

      <h2>6. Delivery, returns and refunds</h2>
      <p>
        Delivery times, shipping methods, return procedures and the statutory 14-day right of
        withdrawal from a distance contract are described in detail on our{' '}
        <Link href="/shipping">Shipping &amp; Returns</Link> page. That page forms an integral part
        of these Terms.
      </p>

      <h2>7. Health disclaimer</h2>
      <p>
        FiberZ products are food supplements and are not intended to diagnose, treat, cure or
        prevent any disease. They do not replace a varied and balanced diet or a healthy
        lifestyle. Please read the full{' '}
        <Link href="/disclaimer">Disclaimer</Link> before using our products and consult your
        physician if you are pregnant, nursing, taking medication or have a medical condition.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        All content on the Website — including text, graphics, logos, images, photographs and
        software — is owned by {COMPANY.legalName} or its licensors and is protected by copyright,
        trademark and other intellectual property laws. You may not reproduce, distribute, modify
        or otherwise use any content for commercial purposes without our prior written consent.
      </p>

      <h2>9. User obligations</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Website for any unlawful purpose</li>
        <li>Submit false, inaccurate or misleading information when placing an order</li>
        <li>Attempt to gain unauthorised access to the Website or its systems</li>
        <li>Interfere with the proper operation of the Website, for example through automated scraping or denial-of-service techniques</li>
        <li>Infringe the intellectual property rights of {COMPANY.legalName} or any third party</li>
      </ul>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by Serbian law, {COMPANY.legalName} shall not be liable
        for any indirect, incidental, special or consequential damages arising from the use of
        the Website or our products. Nothing in these Terms limits any rights you have as a
        consumer that cannot be excluded under Serbian law.
      </p>

      <h2>11. Personal data</h2>
      <p>
        Information about how we collect, use and protect your personal data is set out in our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>12. Complaints and dispute resolution</h2>
      <p>
        If you have a complaint about a product or service, please contact us at{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will acknowledge receipt of
        your complaint within 8 days and respond with a substantive answer within 15 days, in
        accordance with the Serbian Law on Consumer Protection.
      </p>
      <p>
        Any disputes that cannot be resolved amicably shall be subject to the jurisdiction of the
        competent court in the Republic of Serbia.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The version applicable to your order is the
        one published on the Website at the moment the order is placed. Material changes will be
        announced on the Website.
      </p>

      <h2>14. Contact</h2>
      <p>
        For any questions about these Terms, please contact us at{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
