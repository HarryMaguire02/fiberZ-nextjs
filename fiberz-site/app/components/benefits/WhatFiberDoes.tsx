import Image from 'next/image';

const benefits = [
  {
    icon: null, // replace with <Image> once icon is provided
    title: 'Supports Digestive Regularity',
    description:
      'Soluble fiber dissolves in water to form a gel-like substance in the digestive tract. This softens stool and supports regular bowel movements — one of the most widely recognized benefits of dietary fiber intake. Consistent daily fiber intake helps maintain a predictable, comfortable digestive rhythm without harsh stimulants or laxatives.',
    tags: ['Regularity', 'Gut feel', 'Natural function'],
  },
  {
    icon: null,
    title: 'Supports a Healthy Gut Microbiome',
    description:
      'Resistant dextrins act as prebiotics — they serve as a food source for beneficial gut bacteria. A well-nourished microbiome is associated with improved digestive comfort and overall gut health. Supporting your microbiome with daily fiber is a foundational, evidence-based approach.',
    tags: ['Prebiotic effect', 'Microbiome'],
  },
  {
    icon: null,
    title: 'Contributes to Your Daily Fiber Intake',
    description:
      'Health authorities including EFSA and WHO recommend 25-38g of fiber per day. Most adults in developed countries consume 50-70% less fiber than recommended. Each FiberZ sachet provides 4g of fiber, offering a simple, frictionless way to meaningfully close that gap alongside a balanced diet.',
    tags: ['EFSA guideline', 'WHO recommended'],
  },
  {
    icon: null,
    title: 'Dissolves Completely Without Altering Taste',
    description:
      'Resistant dextrin dissolves fully in water, coffee, yogurt, oatmeal, or any beverage — leaving no texture, no clumps, and no noticeable flavor. This makes it easy to incorporate into any part of your day, consistently, without modifying what you enjoy eating or drinking.',
    tags: ['No altered taste', 'Versatile', 'Easy habit'],
  },
  {
    icon: null,
    title: 'Promotes Feelings of Satiety',
    description:
      'Soluble fiber forms a viscous gel in the stomach, which may slow gastric emptying and contribute to a prolonged feeling of fullness. This makes fiber a natural and well-studied component of a balanced approach to appetite management — without appetite suppressants or stimulants.',
    tags: ['Satiety', 'Natural support'],
  },
  {
    icon: null,
    title: 'Simple, Clean Formulation',
    description:
      'FiberZ contains resistant dextrin — and nothing unnecessary. No artificial flavors, no fillers, no added sugars. Just soluble fiber in a clean sachet format that fits easily into any routine. Transparency in formulation is a core part of what we stand for.',
    tags: ['Clean label', 'No additives', 'Transparent'],
  },
];

export default function WhatFiberDoes() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            What Soluble Fiber Does<br />for Your Body
          </h2>
          <p className="mt-4 text-gray-text max-w-xl mx-auto text-sm leading-relaxed">
            FiberZ contains resistant dextrin — a water-soluble dietary fiber with a
            well-documented role in supporting digestive function.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border border-cream-dark rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <Image
                src="/what-fiber-does-icon.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 mb-4"
              />

              <h3 className="text-primary font-semibold text-lg mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {benefit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cream text-primary/70 px-3 py-1 rounded-full"
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
