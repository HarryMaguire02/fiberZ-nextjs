import { Link } from '@/i18n/navigation';

export default function BackedByScience() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/backed-by-science-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(60, 40, 25, 0.5)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="font-cormorant text-white font-bold text-3xl lg:text-5xl mb-5"
          >
            Backed by Science
          </h2>
          <p className="font-montserrat text-white/90 text-sm md:text-base leading-relaxed mb-8">
            Dietary fiber plays a crucial role in digestive health, supporting regular bowel movements, promoting
            beneficial gut bacteria, and contributing to overall wellness. FiberZ uses resistant dextrin, a clinically
            studied form of soluble fiber that is well-tolerated and effective.
          </p>
          <Link
            href="/research"
            className="font-montserrat bg-white/70 inline-block px-8 py-3 rounded-full border border-brand text-brand text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            View Scientific Research
          </Link>
        </div>
      </div>
    </section>
  );
}
