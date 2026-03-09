const stats = [
  { value: '50+', label: 'Clinical studies', sub: 'Peer-reviewed research' },
  { value: '1,000+', label: 'Participants', sub: 'In clinical trials' },
  { value: '30+', label: 'Years', sub: 'Of scientific research' },
  { value: '95%', label: 'Tolerance', sub: 'Without side effects' },
];

export default function ResearchStats() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-brand">{stat.value}</p>
              <p className="font-montserrat font-bold text-heading text-sm mt-2">{stat.label}</p>
              <p className="font-montserrat text-body text-sm mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
