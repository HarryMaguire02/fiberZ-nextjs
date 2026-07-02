import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { COMPANY } from '@/app/lib/company';

export default async function StillHaveQuestions() {
  const t = await getTranslations('FAQ.StillHaveQuestions');

  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading text-center mb-10">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Support */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-body/10 flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
            >
              <Image
                src="/icon-easy-integration.png"
                alt=""
                width={36}
                height={36}
              />
            </div>
            <h3 className="font-montserrat font-semibold text-heading text-lg mb-2">
              {t('emailSupport.title')}
            </h3>
            <p className="font-lato text-body text-sm leading-relaxed mb-6 flex-1">
              {t('emailSupport.body')}
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-8 py-3 hover:bg-brand-dark transition-colors inline-block"
            >
              {t('emailSupport.cta')}
            </a>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-body/10 flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
            >
              <Image
                src="/icon-digestive.png"
                alt=""
                width={36}
                height={36}
              />
            </div>
            <h3 className="font-montserrat font-semibold text-heading text-lg mb-2">
              {t('callUs.title')}
            </h3>
            <p className="font-lato text-body text-sm leading-relaxed mb-6 flex-1">
              {t('callUs.body')}
            </p>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-8 py-3 hover:bg-brand-dark transition-colors inline-block"
            >
              {t('callUs.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
