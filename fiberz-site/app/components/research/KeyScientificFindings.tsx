import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface Finding {
  title: string;
  description: string;
  source: string;
}

export default async function KeyScientificFindings() {
  const t = await getTranslations('Research.KeyFindings');
  const findings = t.raw('items') as Finding[];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight text-center mb-12">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {findings.map((finding) => (
            <div key={finding.title} className="bg-linen rounded-2xl p-7">

              <div className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center mb-5" style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}>
                <Image
                  src="/what-fiber-does-icon.png"
                  alt=""
                  width={34}
                  height={34}
                />
              </div>

              <h3 className="font-montserrat font-bold text-heading text-base mb-3">
                {finding.title}
              </h3>
              <p className="font-lato text-body text-sm leading-relaxed text-justify">
                {finding.description}
              </p>

              <hr className="border-brand my-5" />

              <p className="font-lato text-body/50 text-xs italic">
                {t('sourcePrefix')} {finding.source}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
