import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

// Not in messages/*.json — study year is locale-invariant and only used for
// the calendar-icon meta line, so it's kept as local structural data,
// index-zipped with the translated Research.FeaturedStudies.studies array.
const YEARS = ['2018', '2021', '2024', '2020'];

interface Study {
  title: string;
  participants: string;
  duration: string;
  description: string;
  results: string[];
  citation: string;
}

export default async function FeaturedClinicalStudies() {
  const t = await getTranslations('Research.FeaturedStudies');
  const studies = t.raw('studies') as Study[];

  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading text-center leading-tight mb-4">
          {t('title')}
        </h2>

        <div className="space-y-6">
          {studies.map((study, i) => (
            <div key={study.title} className="bg-white rounded-2xl p-7">

              {/* Title */}
              <h3 className="font-montserrat font-bold text-heading text-base mb-3">
                {study.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mb-4">
                <span className="font-montserrat text-body/70 text-sm">{'📅'} {YEARS[i]}</span>
                <span className="font-montserrat text-body/70 text-sm">{'🔬'} {study.participants}</span>
                <span className="font-montserrat text-body/70 text-sm">{'⏱'} {study.duration}</span>
              </div>

              {/* Description */}
              <p className="font-lato text-body text-sm leading-relaxed mb-4">
                {study.description}
              </p>

              {/* Key Results */}
              <p className="font-montserrat font-semibold text-sm text-brand mb-2">
                {t('keyResults')}
              </p>
              <ul className="space-y-1 mb-6">
                {study.results.map((result) => (
                  <li key={result} className="font-lato text-body text-sm flex gap-2">
                    <span className="text-brand shrink-0">&#10003;</span>
                    {result}
                  </li>
                ))}
              </ul>

              <hr className="border-brand mb-4" />

              {/* Footer */}
              <p className="font-lato text-body/50 text-xs italic">{study.citation}</p>

            </div>
          ))}
        </div>

        {/* Link to full article */}
        <div className="text-center mt-10">
          <Link
            href="/research/resistant-dextrin"
            className="inline-block font-montserrat font-semibold text-white text-sm px-10 py-3.5 rounded-full transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
          >
            {t('readFullArticle')}
          </Link>
        </div>

      </div>
    </section>
  );
}
