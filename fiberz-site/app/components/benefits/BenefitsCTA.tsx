import Link from 'next/link';

export default function BenefitsCTA() {
  return (
    <section className="py-12 lg:py-16 text-center bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-2">
          Start Supporting Your
        </h2>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-6">
          Digestive Health Today
        </h2>
        <p className="text-gray-text text-sm mb-8 leading-relaxed">
          4g of soluble fiber per sachet. 30 sachets per box.<br />
          Simple to use. Backed by science.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/product"
            className="px-8 py-3.5 rounded-full bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/research"
            className="px-8 py-3.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
