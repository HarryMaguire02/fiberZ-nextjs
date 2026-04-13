import Image from 'next/image';

export default function WhatIsFiberZProduct() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10 lg:mb-14">
          What Is <span className="text-brand">FiberZ</span>?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Text */}
          <div>
            <p className="font-lato text-body text-sm lg:text-base leading-relaxed mb-6">
              FiberZ is a soluble dietary fiber supplement made from resistant dextrin, designed to
              help you meet your daily fiber needs with ease and convenience.
            </p>

            <p className="font-montserrat font-bold text-brand text-2xl mb-4">
              Simply put:
            </p>

            <div className="space-y-4 font-lato text-body text-sm lg:text-base leading-relaxed">
              <p>
                If you struggle with irregular digestion, FiberZ helps restore regularity.
              </p>
              <p>
                If you experience bloating and discomfort after meals, FiberZ helps support
                smoother digestion.
              </p>
              <p>
                If you&apos;re not getting enough fiber from your diet, FiberZ helps you bridge the
                gap in a simple way.
              </p>
              <p>
                Unlike synthetic products, FiberZ is natural, works gently, and gradually helps
                your body find balance — without harsh chemicals.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/what-is-fiber-cover.png"
              alt="FiberZ product box"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
