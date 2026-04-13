import Image from 'next/image';

const findings = [
  {
    title: 'Prebiotic Fermentation & SCFA Production',
    description:
      'Resistant dextrins are fermented in the colon, producing short-chain fatty acids (SCFAs) — butyrate, propionate, and acetate — which regulate appetite, stimulate immune cells, and enhance fatty acid oxidation in muscle tissue.',
    source: 'Włodarczyk & Śliżewska, Nutrients, 2021',
  },
  {
    title: 'Improved Insulin Sensitivity',
    description:
      'In clinical trials involving women with type 2 diabetes, 10g of daily resistant dextrin supplementation significantly decreased fasting insulin levels and reduced markers of inflammation and oxidative stress.',
    source: 'Hu F. et al., 2020',
  },
  {
    title: 'Gut Microbiota Modulation',
    description:
      'Resistant dextrin specifically increases the abundance of metabolically beneficial bacteria such as Prevotella and Akkermansia — primary drivers behind systemic improvements in glucose and lipid metabolism.',
    source: 'Hu F. et al., 2020; Włodarczyk & Śliżewska, 2021',
  },
  {
    title: 'Cardiovascular & Blood Pressure Benefits',
    description:
      'A 12-week randomized, double-blind, placebo-controlled trial in elderly T2DM patients showed significant reductions in both systolic and diastolic blood pressure, as well as improved postprandial glucose levels.',
    source: 'Cai X. et al., 2018',
  },
];

export default function KeyScientificFindings() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight text-center mb-12">
          Key Scientific Findings
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
                Source: {finding.source}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
