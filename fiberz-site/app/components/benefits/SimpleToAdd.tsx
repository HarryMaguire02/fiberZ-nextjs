import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface Step {
  title: string;
  description: string;
}

export default async function SimpleToAdd() {
  const t = await getTranslations('Benefits.SimpleToAdd');
  const steps = t.raw('steps') as Step[];

  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Title + Steps */}
          <div>
            <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-4">
              {t('title')}<br />
              <span className="text-brand italic">{t('titleItalic')}</span>
            </h2>
            <p className="font-montserrat text-gray-text text-sm mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-7">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-5 items-start">
                  <div
                    className="shrink-0 w-9 h-9 rounded-full text-white font-bold text-sm flex items-center justify-center"
                    style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-body mb-1">{step.title}</h4>
                    <p className="font-lato text-gray-text text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product image with circle background + floating labels */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[540px]">

            {/* Outermost decorative ring */}
            <div className="absolute w-[380px] h-[380px] lg:w-[540px] lg:h-[540px] rounded-full border border-white" />

            {/* Second decorative ring */}
            <div className="absolute w-[320px] h-[320px] lg:w-[470px] lg:h-[470px] rounded-full border border-white" />

            {/* Warm filled circle background */}
            <div className="absolute w-[270px] h-[270px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#F1ECE0]" />

            {/* Product image */}
            <Image
              src="/simple-product.png"
              alt="FiberZ — 30 sachets of 4g soluble dietary fiber, neutral taste"
              width={420}
              height={420}
              className="relative z-10 w-48 lg:w-[300px] h-auto"
            />

            {/* Label: 4g per sachet — top left */}
            <div className="absolute top-[10%] left-[4%] z-20 bg-white rounded-full px-4 py-1.5">
              <span className="font-montserrat text-sm font-semibold text-oak">{t('labels.perSachet')}</span>
            </div>

            {/* Label: 30 sachets — middle left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[0%] z-20 bg-white rounded-full px-4 py-1.5">
              <span className="font-montserrat text-sm font-semibold text-oak">{t('labels.sachets')}</span>
            </div>

            {/* Label: Neutral taste — bottom right */}
            <div className="absolute bottom-[10%] right-[4%] z-20 bg-white rounded-full px-4 py-1.5">
              <span className="font-montserrat text-sm font-semibold text-oak">{t('labels.neutralTaste')}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
