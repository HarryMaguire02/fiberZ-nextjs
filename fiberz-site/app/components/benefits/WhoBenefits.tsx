import Link from 'next/link';

const targetGroups = [
  {
    title: 'People with Low Dietary Fiber',
    description:
      'If your diet is low in fruits, vegetables, or whole grains, FiberZ provides a practical daily supplement to help close the fiber gap without overhauling your entire diet.',
  },
  {
    title: 'Active & Health-Conscious Adults',
    description:
      'Those focused on gut health, digestive comfort, and overall wellness often prioritize fiber intake. FiberZ makes it easy to meet daily targets regardless of training or meal timing.',
  },
  {
    title: 'Busy People with Irregular Eating',
    description:
      'Travel, work schedules, and irregular meals can disrupt fiber intake and digestive regularity. FiberZ fits into any routine without requiring dietary change — just add it to whatever you\'re drinking.',
  },
];

export default function WhoBenefits() {
  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight">
            What Soluble Fiber Does<br />for Your Body
          </h2>
          <p className="font-montserrat mt-4 text-body text-sm max-w-xl mx-auto leading-relaxed">
            Anyone looking to support their digestive health through consistent,
            adequate fiber intake can benefit from FiberZ as part of a balanced diet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-44 bg-linen" />
              <div className="p-7">
                <h3 className="font-montserrat font-semibold text-heading mb-3 text-center">{group.title}</h3>
                <p className="font-lato text-body text-sm leading-relaxed text-center">{group.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-lato text-body/50 text-xs text-center mt-8 max-w-xl mx-auto leading-relaxed">
          Note: If you are pregnant, breastfeeding, taking medication, or have a digestive health
          condition, please consult your doctor before starting any supplement. This product is not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>

        {/* Divider */}
        <hr className="border-brand my-12 sm:my-16" />

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-2">
            Start Supporting Your
          </h2>
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-brand italic leading-tight mb-6">
            Digestive Health Today
          </h2>
          <p className="font-montserrat text-body text-sm mb-8 leading-relaxed">
            4g of soluble fiber per sachet. 30 sachets per box.<br />
            Simple to use. Backed by science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="font-montserrat px-8 py-3 rounded-full bg-brand text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-dark transition-colors"
            >
              Buy FiberZ Now
            </Link>
            <Link
              href="/research"
              className="font-montserrat px-8 py-3 rounded-full border border-brand bg-white text-brand text-xs font-semibold tracking-widest uppercase hover:bg-brand/10 transition-colors"
            >
              View Research
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
