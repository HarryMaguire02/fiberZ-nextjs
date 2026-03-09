import Image from 'next/image';

const findings = [
  {
    title: 'Improved Digestive Function',
    description:
      'Clinical studies show that regular use of resistant dextrin significantly improves stool frequency and consistency. 78% of participants reported improvement within 2 weeks.',
    source: 'Journal of Nutritional Science, 2018',
  },
  {
    title: 'Gut Microbiome Support',
    description:
      'Research confirms that resistant dextrin selectively stimulates the growth of beneficial gut bacteria, particularly Bifidobacterium and Lactobacillus strains.',
    source: 'Nutrients, 2020',
  },
  {
    title: 'Blood Sugar Regulation',
    description:
      'Studies indicate that resistant dextrin slows glucose absorption and improves post-meal insulin response in individuals with prediabetes.',
    source: 'European Journal of Clinical Nutrition, 2019',
  },
  {
    title: 'Cardiovascular Health',
    description:
      'A meta-analysis shows that soluble fiber intake helps lower LDL ("bad") cholesterol levels and reduce the risk of heart disease.',
    source: 'American Journal of Clinical Nutrition, 2017',
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
