import { getTranslations } from 'next-intl/server';

const VALUES = ['4g', '30', '25-38g', '~95%'];

interface StatItem {
  label: string;
}

export default async function StatsBar() {
  const t = await getTranslations('Benefits.StatsBar');
  const items = t.raw('items') as StatItem[];

  return (
    <section className="bg-brand font-montserrat">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={item.label} className="text-center text-white">
              <p className="text-3xl lg:text-4xl font-bold">{VALUES[i]}</p>
              <p className="text-xs lg:text-sm mt-1 text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
