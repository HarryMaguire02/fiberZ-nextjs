/**
 * Payment method badges shown in the footer.
 *
 * NOTE: These are placeholder text badges. After AllSecure onboarding,
 * replace each pill with the official Visa / Mastercard / Maestro / DinaCard /
 * Apple Pay / Google Pay logos provided by AllSecure (they have a brand kit).
 */
const methods = ['Visa', 'Mastercard', 'Maestro', 'DinaCard', 'Apple Pay', 'Google Pay'];

export default function PaymentMethods() {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-heading font-semibold mb-3">
        We Accept
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
