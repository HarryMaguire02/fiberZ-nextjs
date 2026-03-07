const stats = [
  { value: '4g', label: 'Of soluble fiber per sachet' },
  { value: '30', label: 'Sachets per box' },
  { value: '25-38g', label: 'Daily fiber recommended by WHO' },
  { value: '~95%', label: 'Of adults fall short of fiber goals' },
];

export default function StatsBar() {
  return (
    <section className="bg-brand font-montserrat">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center text-white">
              <p className="text-3xl lg:text-4xl font-bold">{stat.value}</p>
              <p className="text-xs lg:text-sm mt-1 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
