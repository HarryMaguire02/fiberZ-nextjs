const targetGroups = [
  {
    title: 'People with Low Dietary Fiber',
    description:
      'If your diet is low in fruits, vegetables, or whole grains, FiberZ provides a practical, no-effort way to bridge the fiber gap without overhauling your entire diet.',
  },
  {
    title: 'Active & Health-Conscious Adults',
    description:
      'Those focused on gut health, digestive performance, or general wellness often prioritize fiber intake. FiberZ makes it easy to meet daily targets regardless of how busy or varied your eating is.',
  },
  {
    title: 'Busy People with Irregular Eating',
    description:
      'Travel, work schedules, and irregular meals can disrupt fiber intake and digestive regularity. FiberZ fits into whatever you are drinking — and adds to it wherever you are eating.',
  },
];

export default function WhoBenefits() {
  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            What Soluble Fiber Does<br />for Your Body
          </h2>
          <p className="mt-4 text-gray-text text-sm max-w-xl mx-auto leading-relaxed">
            Anyone looking to support their digestive health through consistent,
            adequate fiber intake can benefit from FiberZ as part of a balanced diet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="font-semibold text-primary mb-3">{group.title}</h3>
              <p className="text-gray-text text-sm leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
