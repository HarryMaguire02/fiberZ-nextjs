import { getTranslations } from 'next-intl/server';

const VALUES = ['50+', '1,000+', '30+', '95%'];

interface StatItem {
  label: string;
  sub: string;
}

export default async function ResearchStats() {
  const t = await getTranslations('Research.Stats');
  const items = t.raw('items') as StatItem[];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={item.label} className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-brand">{VALUES[i]}</p>
              <p className="font-montserrat font-bold text-heading text-sm mt-2">{item.label}</p>
              <p className="font-montserrat text-body text-sm mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
