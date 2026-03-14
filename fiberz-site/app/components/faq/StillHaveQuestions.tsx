import Image from 'next/image';

export default function StillHaveQuestions() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading text-center mb-10">
          Still Have Questions?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Support */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-body/10 flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
            >
              <Image
                src="/icon-easy-integration.png"
                alt=""
                width={36}
                height={36}
              />
            </div>
            <h3 className="font-montserrat font-semibold text-heading text-lg mb-2">
              Email Support
            </h3>
            <p className="font-lato text-body text-sm leading-relaxed mb-6 flex-1">
              Send us an email and we&apos;ll respond within 24 hours.
            </p>
            <a
              href="mailto:info@fiberz.com"
              className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-8 py-3 hover:bg-brand-dark transition-colors inline-block"
            >
              Send Email
            </a>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-body/10 flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
            >
              <Image
                src="/icon-digestive.png"
                alt=""
                width={36}
                height={36}
              />
            </div>
            <h3 className="font-montserrat font-semibold text-heading text-lg mb-2">
              Call Us
            </h3>
            <p className="font-lato text-body text-sm leading-relaxed mb-6 flex-1">
              Weekdays from 9:00 AM to 5:00 PM.
            </p>
            <a
              href="tel:+381631077708"
              className="font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-8 py-3 hover:bg-brand-dark transition-colors inline-block"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
