import Image from 'next/image';

const items = [
  {
    icon: '/lack-fiber-bloating.png',
    title: 'Bloating',
    description: 'Low fiber intake can lead to uncomfortable digestive bloating',
  },
  {
    icon: '/lack-fiber-digestition.png',
    title: 'Irregular Digestion',
    description: 'Inconsistent digestive patterns affect daily comfort',
  },
  {
    icon: '/lack-fiber-intake.png',
    title: 'Low Fiber Intake',
    description: 'Average adult consumes only 15g of the recommended 25-38g daily',
  },
  {
    icon: '/lack-fiber-gut.png',
    title: 'Gut Microbiome',
    description: 'Insufficient fiber fails to support healthy gut bacteria',
  },
];

export default function ModernDietsLackFiber() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-heading font-bold text-3xl lg:text-5xl"
          >
            Modern Diets Lack Fiber
          </h2>
          <p className="font-montserrat text-body text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            Most adults do not meet recommended daily fiber intake, which affects digestive regularity and overall gut
            health.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-heading text-sm mb-2">
                {item.title}
              </h3>
              <p className="font-lato text-body text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
