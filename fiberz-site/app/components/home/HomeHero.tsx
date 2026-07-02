import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function HomeHero() {
  const t = await getTranslations('Home.Hero');

  return (
    <section
      className="relative -mt-16 md:-mt-20 flex items-center"
      style={{
        backgroundImage: 'url(/home-hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'clamp(500px, 45.8vw, 750px)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0) 65%)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full pt-24 md:pt-28">
        <div className="max-w-xl">
          <h1 className="font-montserrat text-heading text-3xl lg:text-5xl leading-tight mb-2">
            {t('title')}
          </h1>
          <span
            className="font-montserrat italic text-brand text-3xl lg:text-5xl block mb-6"
          >
            FiberZ
          </span>
          <p className="font-montserrat text-body text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {t('subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/product"
              className="font-montserrat min-w-[200px] text-center px-8 py-3 rounded-full bg-brand text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-dark transition-colors"
            >
              {t('cta1')}
            </Link>
            <Link
              href="/how-it-works"
              className="font-montserrat min-w-[200px] text-center px-8 py-3 rounded-full border border-brand text-brand text-xs font-semibold tracking-widest uppercase bg-white/60 hover:bg-brand/10 transition-colors"
            >
              {t('cta2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
