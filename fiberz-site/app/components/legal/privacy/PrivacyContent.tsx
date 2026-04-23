import { Link } from '@/i18n/navigation';
import LegalPageLayout from '@/app/components/legal/LegalPageLayout';
import { COMPANY, fullAddress } from '@/app/lib/company';

export default function PrivacyContent() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro="How we collect, use and protect your personal information."
      lastUpdated="April 7, 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how <strong>{COMPANY.legalName}</strong> (&ldquo;FiberZ&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, stores and
        protects personal data of visitors and customers of the website fiberz.com. We process
        personal data in accordance with the Serbian Law on Personal Data Protection
        (<em>Zakon o zaštiti podataka o ličnosti</em>, &ldquo;ZZPL&rdquo;) and, where applicable,
        the EU General Data Protection Regulation (GDPR).
      </p>

      <h2>2. Data controller</h2>
      <p>
        The data controller responsible for your personal data is:
        <br />
        <strong>{COMPANY.legalName}</strong>
        <br />
        {fullAddress}
        <br />
        PIB: {COMPANY.pib} | Matični broj: {COMPANY.matBr}
        <br />
        Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </p>

      <h2>3. What personal data we collect</h2>
      <p>Depending on how you interact with us, we may collect:</p>
      <ul>
        <li><strong>Identification and contact data:</strong> first and last name, email address, phone number, delivery and billing address.</li>
        <li><strong>Order data:</strong> products ordered, order amount, payment method, transaction identifiers and fiscal receipt details. We do <strong>not</strong> store full card numbers — these are handled exclusively by our payment service provider.</li>
        <li><strong>Communication data:</strong> the content of any messages you send us (email, contact form, customer support).</li>
        <li><strong>Newsletter data:</strong> email address and subscription preferences if you subscribe to our newsletter.</li>
        <li><strong>Technical and usage data:</strong> IP address, browser type, device information, pages viewed, referring URL, approximate location and performance metrics (page load time, web vitals). Collected through cookies and similar technologies only if you consent to them through our cookie banner.</li>
      </ul>

      <h2>4. How we use your data and the legal basis</h2>
      <ul>
        <li><strong>To process and deliver your orders</strong> — legal basis: performance of a contract.</li>
        <li><strong>To issue invoices and fiscal receipts</strong> — legal basis: legal obligation (Serbian tax and fiscalization laws).</li>
        <li><strong>To respond to your inquiries</strong> — legal basis: legitimate interest in providing customer support.</li>
        <li><strong>To send our newsletter</strong> — legal basis: your consent. You can withdraw your consent at any time using the unsubscribe link in any newsletter email.</li>
        <li><strong>To measure website usage and performance through analytics</strong> — legal basis: legitimate interest in improving the website. Our analytics tools (Vercel Web Analytics and Vercel Speed Insights) are cookieless and do not collect personal data.</li>
        <li><strong>To detect and prevent fraud</strong> — legal basis: legitimate interest in protecting our business and customers.</li>
      </ul>

      <h2>5. How long we keep your data</h2>
      <ul>
        <li>Order, invoice and fiscal data: 10 years (Serbian tax law requirement).</li>
        <li>Customer support conversations: up to 2 years after the last contact.</li>
        <li>Newsletter subscription data: until you unsubscribe.</li>
        <li>Analytics data: as defined by each analytics provider (typically up to 14 months).</li>
      </ul>

      <h2>6. Sharing your data with processors</h2>
      <p>We share personal data only with carefully selected processors that help us operate the business. Each is bound by confidentiality and data protection obligations.</p>
      <ul>
        <li><strong>Payment service provider</strong> — to process card payments securely on a PCI DSS compliant platform.</li>
        <li><strong>Delivery courier</strong> — to deliver your orders to your address.</li>
        <li><strong>Resend</strong> (email service provider, headquartered in the United States) — to send transactional emails (order confirmations, welcome emails) and newsletter campaigns.</li>
        <li><strong>Vercel Inc.</strong> (hosting provider, headquartered in the United States) — to host this website and serve it to visitors.</li>
        <li><strong>Vercel Web Analytics</strong> (operated by Vercel Inc.) — to measure aggregated, privacy-friendly visitor statistics such as page views and referring sources. This tool is cookieless and does not collect personal data.</li>
        <li><strong>Vercel Speed Insights</strong> (operated by Vercel Inc.) — to collect anonymous performance metrics (Core Web Vitals such as Largest Contentful Paint, First Input Delay and Cumulative Layout Shift) so we can improve the site&rsquo;s speed and user experience. This tool is cookieless and does not collect personal data.</li>
        <li><strong>Serbian Tax Administration</strong> (<em>Poreska uprava Republike Srbije</em>) — to issue electronic fiscal receipts as required by the Law on Fiscalization.</li>
        <li><strong>Google Search Console</strong> (operated by Google LLC) — we submit our sitemap and URLs to Google so the site can be found via search. This does not transmit personal data of visitors; only metadata about our pages.</li>
      </ul>
      <p>Some of these processors may store data outside Serbia, including in the European Union and the United States. In such cases we ensure appropriate safeguards are in place in accordance with Article 65 of the ZZPL.</p>

      <h2>7. Cookies and tracking technologies</h2>
      <p>This website does <strong>not</strong> use cookies for analytics or tracking purposes. Our analytics tools — Vercel Web Analytics and Vercel Speed Insights — are fully cookieless and privacy-friendly by design. They do not track individual users, do not store personal data, and do not follow visitors across websites.</p>
      <p>If we introduce any cookies in the future (for example, for payment processing or personalisation), we will update this section and implement a consent mechanism as required by applicable law.</p>

      <h2>8. Your rights</h2>
      <p>Under the ZZPL and the GDPR, you have the following rights regarding your personal data:</p>
      <ul>
        <li>The right to access your data and obtain a copy of it</li>
        <li>The right to rectify inaccurate or incomplete data</li>
        <li>The right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
        <li>The right to restrict processing</li>
        <li>The right to data portability</li>
        <li>The right to object to processing based on legitimate interest</li>
        <li>The right to withdraw consent at any time</li>
        <li>The right to lodge a complaint with the Serbian Commissioner for Information of Public Importance and Personal Data Protection (<em>Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti</em>)</li>
      </ul>
      <p>To exercise any of these rights, contact us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will respond within 30 days.</p>

      <h2>9. Security</h2>
      <p>We apply appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, alteration or disclosure. All payment data is processed on PCI DSS compliant infrastructure provided by our payment service provider, and the website is served over an encrypted HTTPS connection.</p>

      <h2>10. Children</h2>
      <p>Our products and services are intended for adults. We do not knowingly collect personal data from children under 15. If you believe a child has provided us with personal data, please contact us so we can delete it.</p>

      <h2>11. Changes to this Policy</h2>
      <p>We may update this Privacy Policy from time to time. The current version is always available on this page, with the &ldquo;Last updated&rdquo; date at the top.</p>

      <h2>12. Contact</h2>
      <p>For any questions about this Privacy Policy or our processing of your personal data, please contact us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or by post at the address listed above. See also our <Link href="/terms-of-use">Terms of Service</Link>.</p>
    </LegalPageLayout>
  );
}
