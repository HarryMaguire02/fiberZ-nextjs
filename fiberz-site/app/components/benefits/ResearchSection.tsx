import Link from 'next/link';

const researchPoints = [
  {
    title: 'EFSA Recommendation',
    description:
      'The European Food Safety Authority recommends 25g of dietary fiber per day for normal bowel function in healthy adults.',
  },
  {
    title: 'Prebiotic Properties',
    description:
      'Resistant dextrin has been studied for its ability to selectively stimulate beneficial gut bacteria, supporting a healthy microbiome environment.',
  },
  {
    title: 'The Fiber Gap Is Real',
    description:
      'Studies consistently find that most adults in developed countries consume 50-70% less fiber than recommended by health authorities.',
  },
  {
    title: 'Resistant Dextrin Safety',
    description:
      'Resistant dextrin has a well-established safety profile and is generally recognized as safe (GRAS) for use as a dietary fiber supplement.',
  },
];

export default function ResearchSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-5xl font-cormorant font-bold text-heading leading-tight">
            Fiber is One of<br />the Best-Studied Nutrients
          </h2>
          <p className="mt-4 font-montserrat text-gray-text text-sm max-w-lg leading-relaxed">
            Decades of peer-reviewed research support the role of dietary fiber
            in digestive health. Here are some key reference points.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Research points */}
          <div className="space-y-4">
            {researchPoints.map((point) => (
              <div
                key={point.title}
                className="bg-linen rounded-xl p-6"
              >
                <h4 className="font-montserrat font-semibold text-body mb-2">{point.title}</h4>
                <p className="font-lato text-body text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-linen rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h4 className="font-bold text-body text-lg mb-3">
              Want the Full Research Picture?
            </h4>
            <p className="text-body text-sm mb-6 leading-relaxed">
              Our Science &amp; Research page compiles peer-reviewed studies, EFSA and
              WHO guidelines, and detailed explanations of how soluble fiber and
              resistant dextrin work — with citations for every claim.
            </p>
            <div className="flex flex-col items-center gap-3 w-full">
              <Link
                href="/research"
                className="font-montserrat px-8 py-2.5 rounded-full bg-brand text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-dark transition-colors"
              >
                View Scientific Research
              </Link>
              <Link
                href="/faq"
                className="font-montserrat px-8 py-2.5 rounded-full border border-brand bg-white text-brand text-xs font-semibold tracking-widest uppercase hover:bg-brand/10 transition-colors"
              >
                Read Our FAQ
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
