export default function BenefitsHero() {
  return (
    <section
      className="relative text-white py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/benefits-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-warm-brown/70" />
      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Real Benefits.<br />
            <span className="text-brand">Backed by Science.</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Soluble fiber is one of the most studied nutrients in digestive health.
            Here is what quality fiber supplementation can do for you — no
            exaggeration, no miracle claims.
          </p>
        </div>
      </div>
    </section>
  );
}
