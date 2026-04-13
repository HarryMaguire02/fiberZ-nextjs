import { STATS } from '@/app/lib/productData';

export default function ScientificallyProvenStats() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/science-proven-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(60, 40, 25, 0.45)' }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <h2 className="font-cormorant text-white font-bold text-3xl lg:text-5xl text-center mb-10 lg:mb-14">
          Scientifically Proven
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.value}>
                <p className="font-cormorant font-bold text-oak text-4xl lg:text-6xl mb-2">
                  {stat.value}
                </p>
                <p className="font-montserrat font-bold text-heading text-xs sm:text-sm">
                  {stat.label}
                </p>
                <p className="font-lato text-body text-[11px] sm:text-xs mt-2">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
