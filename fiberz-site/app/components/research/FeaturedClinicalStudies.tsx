import { Link } from '@/i18n/navigation';

const studies = [
  {
    title: 'Milk Powder Co-supplemented with Inulin and Resistant Dextrin Improves Glycemic Control and Insulin Resistance in Elderly Type 2 Diabetes Mellitus',
    year: '2018',
    participants: 'Elderly T2DM patients',
    duration: '12 weeks',
    description:
      'A randomized, double-blind, placebo-controlled trial examining the effects of milk powder co-supplemented with inulin and resistant dextrin (MPCIR) on glycemic control in elderly patients with type 2 diabetes mellitus.',
    results: [
      'Significant reductions in both systolic and diastolic blood pressure',
      'Improved postprandial glucose levels',
      'Enhanced insulin sensitivity markers',
    ],
    citation: 'Cai X., Yu H., Liu L., Lu T., Li J., Ji Y., Le Z., Bao L., Ma W., Xiao R., Yang Y. (2018)',
  },
  {
    title: 'Efficiency of Resistant Starch and Dextrins as Prebiotics: A Review of the Existing Evidence and Clinical Trials',
    year: '2021',
    participants: 'Comprehensive review',
    duration: 'Multi-study',
    description:
      'A comprehensive review evaluating the prebiotic efficiency of resistant starch and dextrins, their mechanisms of action through SCFA production, and their role in metabolic regulation, immune support, and fat oxidation.',
    results: [
      'SCFAs from fermentation regulate appetite via PYY and GLP-1 hormones',
      'Stimulation of immune cells including T-helper cells and macrophages',
      'Butyrate enhances fatty acid oxidation, reducing insulin resistance',
      '~75% of resistant dextrin reaches the large intestine for fermentation',
      'Better tolerated than other fibers with less gas and bloating',
    ],
    citation: 'Włodarczyk M., Śliżewska K. Nutrients (2021)',
  },
  {
    title: 'Combination of Inulin and Resistant Dextrin Has Superior Prebiotic Effects and Reduces Gas Production During In Vitro Fermentation',
    year: '2024',
    participants: 'Fecal samples from older adults',
    duration: 'In vitro',
    description:
      'An in vitro fermentation study using fecal samples from older people to evaluate the synergistic prebiotic effects of combining inulin with resistant dextrin, focusing on gas production and microbiota diversity.',
    results: [
      'Combined inulin + resistant dextrin significantly reduced gas production',
      'Maintained or increased microbiota diversity',
      'Stimulated Bifidobacterium growth while minimizing bloating',
      'Superior prebiotic effect compared to either fiber alone',
    ],
    citation: 'Yoshida K., Kokubo E., Morita S., Sonoki H., Miyaji K. (2024)',
  },
  {
    title: 'Resistant Dextrin Improves High-Fat-High-Fructose Diet Induced Insulin Resistance',
    year: '2020',
    participants: 'Animal model + T2DM patients',
    duration: 'Multi-phase',
    description:
      'A study examining how resistant dextrin ameliorates insulin resistance induced by high-fat-high-fructose diets, with clinical validation in women with type 2 diabetes using 10g daily supplementation.',
    results: [
      'Decreased fasting insulin levels in women with T2DM',
      'Reduced markers of inflammation and oxidative stress',
      'Promoted fatty acid β-oxidation in the liver',
      'Reduced triglyceride (TG) and total cholesterol (TC) levels',
      'Increased abundance of beneficial bacteria (Prevotella, Akkermansia)',
    ],
    citation: 'Hu F., Niu Y., Xu X., Hu Q., Su Q., Zhang H. (2020)',
  },
];

export default function FeaturedClinicalStudies() {
  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading text-center leading-tight mb-4">
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
                <span className="font-montserrat text-body/70 text-sm">{'\uD83D\uDCC5'} {study.year}</span>
                <span className="font-montserrat text-body/70 text-sm">{'\uD83D\uDD2C'} {study.participants}</span>
                <span className="font-montserrat text-body/70 text-sm">{'\u23F1'} {study.duration}</span>
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
            READ FULL RESEARCH ARTICLE
          </Link>
        </div>

      </div>
    </section>
  );
}
