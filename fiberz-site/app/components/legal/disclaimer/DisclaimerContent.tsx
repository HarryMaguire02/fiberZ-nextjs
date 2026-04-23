import { Link } from '@/i18n/navigation';
import LegalPageLayout from '@/app/components/legal/LegalPageLayout';

export default function DisclaimerContent() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      intro="Important information about our products, the content on this site and your health."
      lastUpdated="April 7, 2026"
    >
      <h2>1. Food supplement, not a medicine</h2>
      <p>FiberZ products are <strong>dietary supplements</strong> based on soluble fiber. They are not medicines and are not intended to diagnose, treat, cure or prevent any disease. Food supplements should not be used as a substitute for a varied and balanced diet or a healthy lifestyle.</p>

      <h2>2. Recommended use</h2>
      <p>Please follow the recommended daily dose and usage instructions printed on the product packaging. Do not exceed the recommended daily intake. Keep the product out of the reach of small children and store it as indicated on the label.</p>

      <h2>3. When to consult a doctor</h2>
      <p>Consult your physician or a qualified healthcare professional before using FiberZ if you:</p>
      <ul>
        <li>Are pregnant or breastfeeding</li>
        <li>Are taking prescription medication</li>
        <li>Have a chronic medical condition (including diabetes, irritable bowel syndrome, inflammatory bowel disease, or any digestive disorder)</li>
        <li>Are scheduled for surgery</li>
        <li>Have a known allergy or intolerance to any of the listed ingredients</li>
      </ul>
      <p>If you experience any unexpected reaction after consuming FiberZ, stop using the product immediately and seek medical advice.</p>

      <h2>4. Information on this website</h2>
      <p>The content on this website — including articles, blog posts, scientific summaries and FAQ entries — is provided for general informational and educational purposes only. It is not intended as, and should not be relied upon as, medical advice, diagnosis or treatment.</p>
      <p>While we make reasonable efforts to ensure that all information is accurate and based on published research, we make no warranty as to its completeness, accuracy or applicability to your individual situation. Always consult a qualified healthcare professional regarding your specific health needs.</p>

      <h2>5. Individual results may vary</h2>
      <p>Any benefits described on this website are based on general scientific findings about dietary fiber and on the experience of individual users. Individual results may vary depending on diet, lifestyle, health status and other factors. No specific outcome is guaranteed.</p>

      <h2>6. External links</h2>
      <p>This website may contain links to third-party websites or scientific publications. We provide these links for convenience and reference only. We are not responsible for the content, accuracy or privacy practices of any external websites.</p>

      <h2>7. Limitation of liability</h2>
      <p>To the maximum extent permitted by Serbian law, FiberZ and its operators shall not be liable for any direct, indirect, incidental or consequential damages arising from the use of this website or our products. Nothing in this disclaimer limits any rights you have as a consumer that cannot be excluded under Serbian law.</p>

      <h2>8. Updates</h2>
      <p>We may update this disclaimer from time to time. The current version is always available on this page, with the &ldquo;Last updated&rdquo; date shown above. See also our <Link href="/terms-of-use">Terms of Service</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </LegalPageLayout>
  );
}
