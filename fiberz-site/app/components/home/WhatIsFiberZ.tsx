const features = [
  {
    title: '4g Per Pack',
    description: 'Each serving provides 4 grams of soluble fiber',
  },
  {
    title: '30 Sachets Per Box',
    description: 'One month supply for consistent daily use',
    icon: '✓',
  },
  {
    title: 'Dissolves Easily',
    description: 'Mix into water, yogurt, oatmeal, or smoothies',
  },
  {
    title: 'Neutral Taste',
    description: 'Does not alter the flavor of your beverages or food',
  },
  {
    title: '1-3 Sachets Daily',
    description: 'Flexible dosing to meet your individual needs',
  },
];

export default function WhatIsFiberZ() {
  return (
    <section
      className="relative py-12 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/what-is-fiberz-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(60, 40, 25, 0.65)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-white font-bold text-3xl lg:text-5xl mb-4"
          >
            What is FiberZ?
          </h2>
          <p className="font-roboto text-white text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            FiberZ is a water-soluble fiber supplement made from resistant dextrin, designed to help you meet your daily
            fiber needs with ease and convenience.
          </p>
        </div>

        <div className="max-w-175 mx-auto space-y-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl px-6 py-5 text-center shadow-sm"
            >
              <h3 className="font-roboto font-bold text-heading text-sm md:text-base mb-1">
                {feature.icon && <span className="mr-1">{feature.icon}</span>}
                {feature.title}
              </h3>
              <p className="font-roboto text-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
