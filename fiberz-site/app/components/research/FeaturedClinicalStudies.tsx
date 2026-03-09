import Link from 'next/link';

const studies = [
  {
    title: 'Effectiveness of Resistant Dextrin in Improving Digestive Function',
    year: '2018',
    participants: '156 participants',
    duration: '12 weeks',
    description:
      'A randomized, double-blind, placebo-controlled study conducted on 156 adults with mild to moderate digestive issues. Participants consumed 10g of resistant dextrin daily for 12 weeks.',
    results: [
      '78% of participants reported improved digestive regularity',
      'Significant increase in stool frequency (p < 0.001)',
      'Improved stool consistency',
      'Reduced bloating and discomfort',
      'No serious adverse effects reported',
    ],
    citation: 'Hashizume K., et al. J Nutr Sci Vitaminol. 2018',
    href: '#',
  },
  {
    title: 'Prebiotic Effect of Resistant Dextrin on Gut Microbiome Composition',
    year: '2020',
    participants: '98 participants',
    duration: '8 weeks',
    description:
      'A controlled clinical trial examining changes in gut microbiota composition in healthy adults supplementing with resistant dextrin. Stool samples were analysed at baseline, week 4, and week 8.',
    results: [
      'Significant increase in Bifidobacterium abundance',
      'Increased Lactobacillus strain diversity',
      'Reduction in potentially harmful bacteria',
      'Improved gut barrier markers',
      'Well tolerated with no adverse events',
    ],
    citation: 'Respondek F., et al. Nutrients. 2020',
    href: '#',
  },
];

export default function FeaturedClinicalStudies() {
  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading text-center leading-tight mb-10">
          Featured Clinical Studies
        </h2>

        <div className="space-y-6">
          {studies.map((study) => (
            <div key={study.title} className="bg-white rounded-2xl p-7">

              {/* Title */}
              <h3 className="font-montserrat font-bold text-heading text-base mb-3">
                {study.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mb-4">
                <span className="font-montserrat text-body/70 text-sm">📅 {study.year}</span>
                <span className="font-montserrat text-body/70 text-sm">👤 {study.participants}</span>
                <span className="font-montserrat text-body/70 text-sm">⏱ {study.duration}</span>
              </div>

              {/* Description */}
              <p className="font-lato text-body text-sm leading-relaxed mb-4">
                {study.description}
              </p>

              {/* Key Results */}
              <p className="font-montserrat font-semibold text-sm text-brand mb-2">
                Key Results:
              </p>
              <ul className="space-y-1 mb-6">
                {study.results.map((result) => (
                  <li key={result} className="font-lato text-body text-sm flex gap-2">
                    <span className="text-brand shrink-0">✓</span>
                    {result}
                  </li>
                ))}
              </ul>

              <hr className="border-brand mb-4" />

              {/* Footer */}
              <div className="flex items-center justify-between gap-4">
                <p className="font-lato text-body/50 text-xs italic">{study.citation}</p>
                <Link
                  href={study.href}
                  className="font-montserrat text-sm text-brand hover:text-brand-dark transition-colors shrink-0 whitespace-nowrap"
                >
                  Read study
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
