import Image from 'next/image';

const steps = [
  {
    number: '1',
    title: 'Open One Sachet',
    description:
      'The most effective supplement is the one you actually take. FiberZ is designed to make daily fiber intake effortless.',
  },
  {
    number: '2',
    title: 'Mix Into Any Drink or Food',
    description:
      'Stir into water, coffee, tea, smoothie, yogurt, or oatmeal. It dissolves completely — no change in texture or taste. Any time of day works.',
  },
  {
    number: '3',
    title: 'Increase Gradually If Needed',
    description:
      'Up to 1-3 sachets per day. Gradual increases allow your gut microbiome to adapt comfortably and help minimize any initial digestive adjustment.',
  },
  {
    number: '4',
    title: 'Stay Consistent',
    description:
      'Fiber benefits build with consistency. Most users notice improvements in digestive regularity and comfort within 5-7 days of daily use. Drink adequate water throughout the day.',
  },
];

export default function SimpleToAdd() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text + Steps */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">
              Simple to Add.<br />
              <span className="text-brand">Easy to Stay Consistent.</span>
            </h2>
            <p className="text-gray-text text-sm mb-10 leading-relaxed">
              The most effective supplement is the one you actually take. FiberZ is
              designed to make daily fiber intake effortless.
            </p>

            <div className="space-y-7">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                    <p className="text-gray-text text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/simple-product.png"
              alt="FiberZ product box"
              width={400}
              height={400}
              className="w-72 h-auto lg:w-96"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
