import Image from 'next/image';

const benefits = [
  {
    title: 'Supports Digestive Regularity',
    description:
      'Soluble fiber dissolves in water to form a gel-like substance in the digestive tract. This softens stool and supports regular bowel movements - one of the most widely recognized benefits of adequate dietary fiber intake. Consistent daily fiber intake helps maintain a predictable, comfortable digestive rhythm without harsh stimulants or laxatives.',
    tags: ['Regularity', 'Gut comfort', 'Natural function'],
    wide: true,
  },
  {
    title: 'Supports a Healthy Gut Microbiome',
    description:
      'Soluble fibers like resistant dextrin act as prebiotics - they serve as a food source for beneficial gut bacteria. A well-nourished microbiome is associated with improved digestive comfort and overall gut health. Supporting your microbiome with daily fiber is a foundational, evidence-based approach.',
    tags: ['Prebiotic effect', 'Microbiome'],
  },
  {
    title: 'Contributes to Your Daily Fiber Intake',
    description:
      'Health authorities including EFSA and WHO recommend 25-38g of fiber per day for adults. The average person consumes significantly less. Each FiberZ sachet provides 4g of fiber, offering a simple, tasteless way to meaningfully close that gap alongside a balanced diet.',
    tags: ['EFSA guideline', 'WHO recommended'],
  },
  {
    title: 'Dissolves Completely Without Altering Taste',
    description:
      'Resistant dextrin dissolves fully in water, coffee, yogurt, oatmeal, or any beverage - leaving no texture, no clumps, and no noticeable flavor. This makes it easy to incorporate into any part of your day, consistently, without modifying what you enjoy eating or drinking.',
    tags: ['Neutral taste', 'Versatile', 'Easy habit'],
  },
  {
    title: 'Supports Feelings of Satiety',
    description:
      'Soluble fiber forms a viscous gel in the stomach, which may slow gastric emptying and contribute to a prolonged feeling of fullness. This makes fiber a natural and well-studied component of a balanced approach to appetite management - without appetite suppressants or stimulants.',
    tags: ['Satiety', 'Natural support'],
  },
  {
    title: 'Simple, Clean Formulation',
    description:
      'FiberZ contains resistant dextrin - and nothing unnecessary. No artificial flavors, no fillers, no added sugars. Just soluble fiber in a clean sachet format that fits easily into any routine. Transparency in formulation is a core part of what we stand for.',
    tags: ['Clean label', 'No additives', 'Transparent'],
  },
];

export default function WhatFiberDoes() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading font-playfair">
            What Soluble Fiber Does<br />for Your Body
          </h2>
          <p className="mt-4 text-body max-w-xl mx-auto text-sm leading-relaxed">
            FiberZ contains resistant dextrin - a water-soluble dietary fiber with a
            well-documented role in supporting digestive function.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`bg-linen rounded-2xl p-7 hover:shadow-md transition-shadow${benefit.wide ? ' lg:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}>
                  <Image
                    src="/what-fiber-does-icon.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-heading font-semibold text-lg leading-snug pt-2">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-body/80 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {benefit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-tag text-brown px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
