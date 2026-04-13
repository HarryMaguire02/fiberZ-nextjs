import Image from 'next/image';

const tips = [
  {
    icon: '/icon-fiber-intake.png',
    title: 'Any Time of Day',
    description:
      'Morning, afternoon, or evening — FiberZ works whenever it fits your schedule. Many users prefer taking it with breakfast to start the day right.',
  },
  {
    icon: '/icon-easy-integration.png',
    title: 'Mix With Anything',
    description:
      'Water, coffee, tea, smoothies, yogurt, oatmeal, or soup. FiberZ dissolves completely with no change in taste, texture, or color.',
  },
  {
    icon: '/icon-fiber-intake.png',
    title: 'Stay Hydrated',
    description:
      'Drink plenty of water throughout the day. Adequate hydration helps soluble fiber work effectively and supports overall digestive comfort.',
  },
  {
    icon: '/icon-digestive.png',
    title: 'Be Consistent',
    description:
      'Fiber benefits build over time. Most users notice improvements in digestive regularity within 1-3 weeks of consistent daily use.',
  },
];

export default function WhenToTake() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-4">
            Tips for{' '}
            <span className="text-brand italic">Best Results</span>
          </h2>
          <p className="font-montserrat text-body text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Getting the most out of FiberZ is easy. Here are a few practical
            tips to help you build a lasting habit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-linen rounded-2xl p-6 md:p-8 text-center"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                <Image
                  src={tip.icon}
                  alt={tip.title}
                  width={34}
                  height={34}
                />
              </div>
              <h3 className="font-montserrat font-bold text-heading text-sm mb-2">
                {tip.title}
              </h3>
              <p className="font-lato text-body text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
