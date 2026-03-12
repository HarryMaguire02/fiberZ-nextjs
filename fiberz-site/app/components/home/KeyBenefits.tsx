import Image from 'next/image';

const benefits = [
  {
    icon: '/icon-digestive.png',
    title: 'Supports Digestive Regularity',
    description: 'Helps maintain consistent and comfortable digestive patterns',
  },
  {
    icon: '/icon-microbiota.png',
    title: 'Healthy Gut Microbiota',
    description: 'Supports beneficial bacteria for optimal gut health',
  },
  {
    icon: '/icon-fiber-intake.png',
    title: 'Daily Fiber Intake',
    description: 'Helps you reach recommended fiber goals easily',
  },
  {
    icon: '/icon-easy-integration.png',
    title: 'Easy Integration',
    description: 'Dissolves completely without altering taste or texture',
  },
];

export default function KeyBenefits() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-heading font-bold text-3xl lg:text-5xl"
          >
            Key Benefit
          </h2>
          <p className="font-montserrat text-body text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Science-backed support for your digestive health and daily wellness
          </p>
        </div>

        <div className="bg-linen rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}>
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={34}
                    height={34}
                  />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-heading text-sm md:text-base mb-1">
                    {benefit.title}
                  </h3>
                  <p className="font-lato text-body text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
