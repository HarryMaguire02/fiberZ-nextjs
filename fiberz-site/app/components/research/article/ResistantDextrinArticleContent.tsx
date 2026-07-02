import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getBreadcrumbJsonLd } from '@/app/lib/jsonLd';

const references = [
  {
    id: 1,
    text: 'Cai X., Yu H., Liu L., Lu T., Li J., Ji Y., Le Z., Bao L., Ma W., Xiao R., Yang Y. (2018). Milk powder co-supplemented with inulin and resistant dextrin improves glycemic control and insulin resistance in elderly type 2 diabetes mellitus: a 12-week randomized, double-blind, placebo-controlled trial.',
  },
  {
    id: 2,
    text: 'Włodarczyk M., Śliżewska K. (2021). Efficiency of Resistant Starch and Dextrins as Prebiotics: A Review of the Existing Evidence and Clinical Trials. Nutrients.',
  },
  {
    id: 3,
    text: 'Yoshida K., Kokubo E., Morita S., Sonoki H., Miyaji K. (2024). Combination of Inulin and Resistant Dextrin Has Superior Prebiotic Effects and Reduces Gas Production During In Vitro Fermentation of Fecal Samples from Older People.',
  },
  {
    id: 4,
    text: 'Hu F., Niu Y., Xu X., Hu Q., Su Q., Zhang H. (2020). Resistant dextrin improves high-fat-high-fructose diet induced insulin resistance.',
  },
];

interface ResistantDextrinArticleContentProps {
  locale: string;
}

export default function ResistantDextrinArticleContent({ locale }: ResistantDextrinArticleContentProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd(
              [
                { name: 'Home', href: '/' },
                { name: 'Research', href: '/research' },
                { name: 'Resistant Dextrin', href: '/research/resistant-dextrin' },
              ],
              locale
            )
          ),
        }}
      />

      {/* Hero */}
      <section className="relative text-white overflow-hidden flex flex-col justify-end lg:min-h-125">
        <Image
          src="/backed-by-science-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          style={{ filter: 'blur(1px)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(80,44,30,1) 0%, rgba(80,44,30,1) 48%, rgba(61,49,41,0.7) 100%)',
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(212,172,119,0.25)' }}
        />
        <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full text-center pb-10 lg:pb-16 pt-20 lg:pt-32">
          <p className="font-montserrat text-white/80 text-sm uppercase tracking-wider mb-4">
            FiberZ Research
          </p>
          <h1 className="font-cormorant font-bold text-3xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            The Role and Therapeutic Potential of Resistant Dextrins as Prebiotics
          </h1>
          <p className="font-montserrat text-white/90 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            A comprehensive review of the science behind resistant dextrin — the active
            ingredient in FiberZ.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-linen">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-20 font-roboto text-body">
          <div className="research-prose space-y-6 leading-relaxed">
            <p>
              In recent decades, the escalating prevalence of chronic metabolic
              conditions — including obesity, type-2 diabetes mellitus (T2DM), and
              cardiovascular diseases — has prompted a significant shift toward the
              development of functional foods. Among these, modified dietary fibers
              such as resistant starch (RS) and resistant dextrin (RD) have gained
              prominence for their ability to improve human health without adversely
              affecting the sensory qualities of food. These substances function as
              prebiotics: non-digestible food components that selectively nourish
              beneficial gut microorganisms, thereby conferring health benefits on the
              host.<sup>[2]</sup>
            </p>

            <h2>1. Defining Prebiotics and Functional Fibers</h2>
            <p>
              A certified prebiotic must meet several rigorous criteria. It must resist
              digestion by gastrointestinal acids and enzymes, serve as a dedicated
              fermentation substrate for beneficial bacteria, and remain stable during
              food processing. While many prebiotics are plant-derived
              oligosaccharides like inulin, starch derivatives such as resistant
              dextrins also comply with these standards.<sup>[2]</sup>
            </p>
            <p>
              Unlike standard dietary fibers, prebiotics are recognized specifically
              for their &ldquo;cause-and-effect relationship&rdquo; with the growth of
              beneficial gut microbiota, a distinction emphasized by regulatory bodies
              like the European Food Safety Authority (EFSA).<sup>[2]</sup>
            </p>

            <h2>2. Mechanisms of Action: Fermentation and Metabolites</h2>
            <p>
              The health-promoting properties of resistant starch and dextrins are
              primarily realized through their fermentation in the colon. This process
              produces short-chain fatty acids (SCFAs), such as butyrate, propionate,
              and acetate, which serve as critical signaling molecules.<sup>[2]</sup>
            </p>
            <ul>
              <li>
                <strong>Metabolic Regulation:</strong> SCFAs help regulate appetite by
                decreasing ghrelin levels and increasing satiety-promoting hormones
                like peptide YY (PYY) and glucagon-like peptide-1
                (GLP-1).<sup>[2]</sup>
              </li>
              <li>
                <strong>Immune Support:</strong> They stimulate immune cells, including
                T-helper cells and macrophages, and help maintain the intestinal
                barrier by promoting the growth of beneficial bacteria that exclude
                pathogens.<sup>[2]</sup>
              </li>
              <li>
                <strong>Fat Oxidation:</strong> Butyrate, in particular, enhances the
                expression of receptors that improve fatty acid oxidation in muscle
                tissue, directly contributing to reduced insulin
                resistance.<sup>[2]</sup>
              </li>
            </ul>

            <h2>3. Resistant Dextrins: Production and Properties</h2>
            <p>
              Resistant dextrins are short-chain glucose polymers produced through a
              highly controlled process of starch dextrinization. By applying high
              temperatures and acidic catalysts, the default 1,4- and 1,6-glycosidic
              bonds in starch are replaced with 1,2- and 1,3- linkages. These new
              chemical bonds cannot be easily targeted by human digestive enzymes,
              ensuring that roughly 75% of the substance reaches the large intestine
              for fermentation.
            </p>
            <p>
              Crucially, resistant dextrins are often better tolerated than other
              fibers; they produce smaller volumes of gas, which minimizes common side
              effects like bloating and abdominal discomfort.<sup>[2]</sup>
            </p>

            <h2>4. Clinical Evidence: Insulin Resistance and Glycemic Control</h2>
            <p>
              Extensive clinical and animal studies have demonstrated the efficacy of
              resistant dextrins in managing metabolic syndrome:
            </p>
            <ul>
              <li>
                <strong>Improved Insulin Sensitivity:</strong> In trials involving
                women with type-2 diabetes, 10g of daily resistant dextrin
                supplementation significantly decreased fasting insulin levels and
                reduced markers of inflammation and oxidative stress.<sup>[4]</sup>
              </li>
              <li>
                <strong>Reduction in Hepatic Lipid Deposition:</strong> Animal models
                have shown that resistant dextrin can ameliorate insulin resistance
                induced by high-fat-high-fructose diets by promoting fatty acid
                &beta;-oxidation and reducing triglyceride (TG) and total cholesterol
                (TC) levels in the liver.<sup>[4]</sup>
              </li>
              <li>
                <strong>Cardiovascular Benefits:</strong> In elderly patients with
                T2DM, a 12-week intervention using milk powder co-supplemented with
                inulin and resistant dextrin (MPCIR) led to significant reductions in
                both systolic and diastolic blood pressure, as well as improved
                postprandial glucose levels.<sup>[4]</sup>
              </li>
            </ul>

            {/* Flowchart diagram */}
            <div className="my-8">
              <h3 className="text-center mb-6">Intestinal-Function-Related Metabolic Diseases and Their Management</h3>
              <div className="flex flex-col items-center gap-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col items-center gap-0">
                    <div className="rounded-xl p-4 text-white w-full" style={{ background: '#E8861C' }}>
                      <p className="font-montserrat font-bold text-sm mb-2">1. External / Lifestyle Factors:</p>
                      <ul className="list-disc pl-5 mb-0 text-sm">
                        <li>High-fat / Western diet</li>
                        <li>Low fiber intake</li>
                        <li>Antibiotics</li>
                        <li>Sedentary lifestyle</li>
                        <li>Stress</li>
                      </ul>
                    </div>
                    <span className="text-2xl md:hidden" style={{ color: '#E8861C' }}>{'⬇'}</span>
                  </div>
                  <div className="rounded-xl p-4 text-white" style={{ background: '#E8861C' }}>
                    <p className="font-montserrat font-bold text-sm mb-2">2. Gut Microbiota Dysbiosis:</p>
                    <ul className="list-disc pl-5 mb-0 text-sm">
                      <li>&darr; beneficial bacteria</li>
                      <li>&uarr; pathogenic bacteria</li>
                      <li>Reduced diversity</li>
                    </ul>
                  </div>
                </div>
                <div className="text-2xl py-1" style={{ color: '#D97A1A' }}>{'⬇'}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col items-center gap-0">
                    <div className="rounded-xl p-4 text-white w-full" style={{ background: '#E8861C' }}>
                      <p className="font-montserrat font-bold text-sm mb-2">3. Intestinal Dysfunction</p>
                      <ul className="list-disc pl-5 mb-0 text-sm">
                        <li>Increased intestinal permeability (&ldquo;leaky gut&rdquo;)</li>
                        <li>Altered metabolites (&darr; SCFAs, &uarr; LPS, &uarr; TMAO)</li>
                        <li>Impaired mucosal barrier</li>
                        <li>Immune dysregulation</li>
                      </ul>
                    </div>
                    <span className="text-2xl md:hidden" style={{ color: '#E8861C' }}>{'⬇'}</span>
                  </div>
                  <div className="rounded-xl p-4 text-white" style={{ background: '#E8861C' }}>
                    <p className="font-montserrat font-bold text-sm mb-2">4. Systemic Effects</p>
                    <ul className="list-disc pl-5 mb-0 text-sm">
                      <li>Chronic low-grade inflammation</li>
                      <li>Insulin resistance</li>
                      <li>Lipid metabolism disorders</li>
                      <li>Oxidative stress</li>
                    </ul>
                  </div>
                </div>
                <div className="text-2xl py-1" style={{ color: '#E8861C' }}>{'⬇'}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col items-center gap-0">
                    <div className="rounded-xl p-4 text-white w-full" style={{ background: '#E8861C' }}>
                      <p className="font-montserrat font-bold text-sm mb-2">5. Metabolic Diseases</p>
                      <ul className="list-disc pl-5 mb-0 text-sm">
                        <li>Obesity</li>
                        <li>Type 2 diabetes</li>
                        <li>NAFLD (fatty liver disease)</li>
                        <li>Hyperlipidemia</li>
                        <li>Metabolic syndrome</li>
                      </ul>
                    </div>
                    <span className="text-2xl md:hidden" style={{ color: '#5A9A3C' }}>{'⬇'}</span>
                  </div>
                  <div className="rounded-xl p-5 text-white" style={{ background: '#5A9A3C' }}>
                    <p className="font-montserrat font-bold text-sm mb-3">6. Management Strategies</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="italic font-semibold">Diet-based:</p>
                        <ul className="list-disc pl-5 mb-1">
                          <li>High-fiber diet</li>
                          <li>Polyphenols / functional foods</li>
                        </ul>
                      </div>
                      <div>
                        <p className="italic font-semibold">Microbiota-targeted:</p>
                        <ul className="list-disc pl-5 mb-1">
                          <li>Probiotics</li>
                          <li>Prebiotics</li>
                          <li>Synbiotics</li>
                          <li>Fecal microbiota transplantation (FMT)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="italic font-semibold">Lifestyle:</p>
                        <ul className="list-disc pl-5 mb-1">
                          <li>Exercise</li>
                          <li>Weight control</li>
                        </ul>
                      </div>
                      <p className="italic font-semibold">Pharmacological / clinical</p>
                    </div>
                  </div>
                </div>
                <div className="text-2xl py-1" style={{ color: '#5A9A3C' }}>{'⬇'}</div>
                <div className="w-full">
                  <div className="rounded-xl p-4 text-white" style={{ background: '#5A9A3C' }}>
                    <p className="font-montserrat font-bold text-sm mb-2">7. Restored Gut Homeostasis</p>
                    <ul className="list-disc pl-5 mb-0 text-sm">
                      <li>Balanced microbiota</li>
                      <li>Improved barrier function</li>
                      <li>Reduced inflammation</li>
                      <li>Improved metabolic outcomes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>5. Synergistic Effects and Microbiota Modulation</h2>
            <p>
              Recent research highlights the benefits of combining different prebiotic
              materials. For instance, inulin is a highly selective and rapidly utilized
              prebiotic that effectively stimulates <em>Bifidobacterium</em> growth but
              can cause significant gas and bloating. However, when inulin is combined
              with resistant dextrin — which is utilized more slowly by a broader range
              of bacterial genera — gas production is significantly reduced while
              microbiota diversity is maintained or increased.<sup>[3]</sup>
            </p>
            <p>
              Furthermore, resistant dextrin has been shown to specifically increase the
              abundance of metabolically beneficial bacteria such as{' '}
              <em>Prevotella</em> and <em>Akkermansia</em>. These shifts in the
              microbial landscape are believed to be the primary drivers behind the
              systemic improvements in glucose and lipid metabolism observed in clinical
              settings.<sup>[4]</sup>
            </p>

            <h2>6. About FiberZ</h2>
            <p>
              FiberZ is resistant dextrin, classified as a soluble dietary fiber. It is
              the result of a scientific collaboration between leading experts from RMIT
              University in Melbourne, Australia, the innovative engineering team at
              Microtec Engineering Group PTY LTD in Australia, as well as the
              development team of Fidelinka Skrob d.o.o. from Serbia.
            </p>
            <p>
              Designed to support healthier food formulation, FiberZ offers a new way to
              reduce sugar and increase fiber content while simultaneously lowering
              calories across a wide range of food products.
            </p>
            <p>
              FiberZ is a soluble dietary fiber that easily dissolves in water and is
              characterized by low viscosity. It is not digested in the small intestine
              and is not absorbed into the bloodstream, but instead reaches the large
              intestine, where it is partially fermented by the gut microbiota.
            </p>
            <p>
              FiberZ is produced by heating wheat starch at a high temperature with acid
              treatment, resulting in the formation of resistant wheat dextrin. Wheat
              resistant dextrin is a group of low molecular weight carbohydrates. They
              consist of a mixture of oligosaccharides of different chain lengths,
              consisting predominantly of glucose units connected by &alpha;(1&rarr;4)
              and/or &alpha;(1&rarr;6) glycosidic bonds.
            </p>
            <p>
              FiberZ is a fine powder, light brown in color, with a characteristic odor
              and flavor, containing more than 50% fiber. Its properties, such as low
              viscosity, ensure good consistency when added to water, beverages, or soft
              foods. Wheat resistant dextrin is completely soluble in water.
            </p>

            <figure className="my-8">
              <Image
                src="/research/fiberz-research.jpg"
                alt="FiberZ — resistant wheat dextrin powder"
                width={800}
                height={533}
                className="rounded-2xl w-full h-auto"
              />
              <figcaption className="text-center text-xs text-body/50 mt-3 italic">
                FiberZ — resistant wheat dextrin
              </figcaption>
            </figure>

            <h3>Health Benefits</h3>
            <p>
              Dietary fiber plays a quiet but powerful role in health. It is a type of
              carbohydrate that your body cannot digest — but that&rsquo;s exactly what
              makes it so important. While most carbs break down into sugar, fiber
              passes through the gut, keeping digestion on track and feeding good gut
              bacteria. It can assist in managing constipation, diarrhea, and irritable
              bowel syndrome.
            </p>
            <p>
              Fibers can contribute to the regulation of micronutrient absorption, the
              stabilization of blood glucose and cholesterol levels, and the
              preservation of cardiovascular health.
            </p>
            <p>
              <strong>Ingredients:</strong> 100% resistant wheat dextrin powder.
            </p>

            <h3>Nutritional Values</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-brand">
                    <th className="text-left py-2 pr-4 font-montserrat font-semibold text-heading">Nutrient</th>
                    <th className="text-right py-2 px-4 font-montserrat font-semibold text-heading">Per 100g</th>
                    <th className="text-right py-2 pl-4 font-montserrat font-semibold text-heading">Per 4g sachet</th>
                  </tr>
                </thead>
                <tbody className="font-lato">
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4">Energy</td><td className="text-right py-2 px-4">1193 kJ / 287 kcal</td><td className="text-right py-2 pl-4">48 kJ / 11 kcal</td></tr>
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4">Fat</td><td className="text-right py-2 px-4">0.6g</td><td className="text-right py-2 pl-4">0.02g</td></tr>
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4 pl-4 text-body/70">of which saturates</td><td className="text-right py-2 px-4">0.2g</td><td className="text-right py-2 pl-4">0.008g</td></tr>
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4">Carbohydrate</td><td className="text-right py-2 px-4">44g</td><td className="text-right py-2 pl-4">1.8g</td></tr>
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4 pl-4 text-body/70">of which sugars</td><td className="text-right py-2 px-4">3.4g</td><td className="text-right py-2 pl-4">0.1g</td></tr>
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4">Fiber</td><td className="text-right py-2 px-4">51g</td><td className="text-right py-2 pl-4">2.1g</td></tr>
                  <tr className="border-b border-brand/20"><td className="py-2 pr-4">Protein</td><td className="text-right py-2 px-4">0.6g</td><td className="text-right py-2 pl-4">0.02g</td></tr>
                  <tr><td className="py-2 pr-4">Salt</td><td className="text-right py-2 px-4">&lt; 0.01g</td><td className="text-right py-2 pl-4">&lt; 0.0004g</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Active Ingredients</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-brand">
                    <th className="text-left py-2 pr-4 font-montserrat font-semibold text-heading">Ingredient</th>
                    <th className="text-right py-2 px-4 font-montserrat font-semibold text-heading">Per 100g</th>
                    <th className="text-right py-2 px-4 font-montserrat font-semibold text-heading">Per 4g sachet</th>
                    <th className="text-right py-2 pl-4 font-montserrat font-semibold text-heading">Per 12g (3 sachets)</th>
                  </tr>
                </thead>
                <tbody className="font-lato">
                  <tr>
                    <td className="py-2 pr-4">Resistant Wheat Dextrin Powder</td>
                    <td className="text-right py-2 px-4">100g</td>
                    <td className="text-right py-2 px-4">4g*</td>
                    <td className="text-right py-2 pl-4">12g*</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-body/50 mt-2 italic">
                *Nutritional Reference Value (NRV) not established.
              </p>
            </div>

            <h2>7. Conclusion</h2>
            <p>
              Resistant starch and dextrins represent a sophisticated class of
              prebiotics that offer substantial therapeutic potential. By selectively
              modulating the gut microbiota and fostering the production of SCFAs, these
              functional fibers effectively address the underlying mechanisms of insulin
              resistance, obesity, and systemic inflammation. Their high tolerance and
              versatility in food applications make them an essential tool for both the
              prevention and management of modern metabolic diseases.
            </p>
            <p>
              Traditional fiber sources found in whole plant-based foods like fruits and
              vegetables, whole grains (wheat, oat, barley), nuts and seeds, and
              legumes. Even diets rich in these foods often don&rsquo;t hit the daily
              target — that&rsquo;s why FiberZ, a resistant wheat dextrin, can help with
              this deficiency. FiberZ: natural support for digestion, energy, and
              overall body balance. Whether the target is sugar reduction, fiber
              enrichment, decrease in body weight, or digestive health benefits, FiberZ
              can be seamlessly integrated into your daily routine.
            </p>

            <h2>References</h2>
            <ol className="list-decimal pl-6 space-y-3">
              {references.map((ref) => (
                <li key={ref.id} className="text-sm text-body/70 italic">
                  {ref.text}
                </li>
              ))}
            </ol>

            <div className="mt-12 text-center">
              <Link
                href="/research"
                className="font-montserrat text-sm text-brand hover:text-brand-dark transition-colors"
              >
                &larr; Back to Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
