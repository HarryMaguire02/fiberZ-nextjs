import Image from 'next/image';

export default function ResearchHero() {
  return (
    <section className="relative text-white overflow-hidden flex flex-col justify-end">

      {/* Background image — fill + blur directly on the image */}
      <Image
        src="/research-hero.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ filter: 'blur(1px)' }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(80,44,30,1) 0%, rgba(80,44,30,1) 48%, rgba(61,49,41,0.7) 100%)',
          opacity: 0.25,
        }}
      />

      {/* Brand tint — #D4AC77 at 25% */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(212,172,119,0.25)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full text-center pb-10 lg:pb-16 pt-20 lg:pt-32">
        <h1 className="font-cormorant font-bold mb-4 text-3xl lg:text-5xl leading-tight">
          Backed by Science
        </h1>
        <p className="font-montserrat text-white text-base leading-relaxed max-w-xl mx-auto">
          FiberZ is supported by decades of scientific research on the benefits of dietary fiber.
          Discover clinically proven effects.
        </p>
      </div>

    </section>
  );
}
