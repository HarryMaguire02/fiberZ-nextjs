import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-4">
          Ready to Get Started?
        </h2>
        <p className="font-montserrat text-body text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
          Start your journey to better digestive health today.
          Choose the package that fits your needs.
        </p>
        <Link
          href="/product"
          className="inline-block font-montserrat font-semibold text-white text-sm px-10 py-3.5 rounded-full transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
        >
          SHOP FIBERZ
        </Link>
      </div>
    </section>
  );
}
