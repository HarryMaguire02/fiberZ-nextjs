const steps = [
  {
    number: '1',
    title: 'Start Small',
    description: 'Begin with 1 sachet per day to allow your digestive system to adjust gradually',
  },
  {
    number: '2',
    title: 'Mix & Dissolve',
    description: 'Add to water, smoothies, yogurt, or oatmeal. Stir until completely dissolved',
  },
  {
    number: '3',
    title: 'Build Up',
    description: 'Gradually increase to 1-3 sachets daily based on your fiber needs and tolerance',
  },
];

export default function HowToUse() {
  return (
    <section
      className="relative py-12 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/how-to-use-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(60, 40, 25, 0.55)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-white font-bold text-3xl lg:text-5xl mb-3"
          >
            How to Use FiberZ
          </h2>
          <p className="font-montserrat text-white text-sm md:text-base leading-relaxed">
            Simple integration into your daily routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center"
            >
              <div
                className="w-12 h-12 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                {step.number}
              </div>
              <h3 className="font-montserrat font-bold text-heading text-base mb-2">
                {step.title}
              </h3>
              <p className="font-lato text-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
