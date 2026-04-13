'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  PACKAGES,
  PRODUCT_BENEFITS,
  PRODUCT_IMAGES,
  SHIPPING_COST,
  formatRSD,
} from '@/app/lib/productData';
import { COMPANY } from '@/app/lib/company';

export default function ProductHero() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedPkgId, setSelectedPkgId] = useState(PACKAGES[0].id);
  const [quantity, setQuantity] = useState(1);
  const [showNotice, setShowNotice] = useState(false);

  const selectedPkg = PACKAGES.find((p) => p.id === selectedPkgId) ?? PACKAGES[0];

  const itemTotal = selectedPkg.salePrice * quantity;
  const originalTotal = selectedPkg.originalPrice * quantity;
  const discount = originalTotal - itemTotal;

  return (
    <section className="py-10 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left — Image Gallery */}
          <div>
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden">
              <Image
                src={PRODUCT_IMAGES[activeImage]}
                alt="FiberZ product"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex gap-3 mt-4">
              {PRODUCT_IMAGES.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-linen ${
                    activeImage === i
                      ? 'ring-2 ring-brand'
                      : 'ring-1 ring-body/20 hover:ring-brand/50'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Product view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Configurator */}
          <div className="p-6 lg:p-8">
            {/* Title — uses the same logo as the header */}
            <h1>
              <Image
                src="/fiberZ-logo-footer.png"
                alt="FiberZ"
                width={200}
                height={56}
                className="h-12 lg:h-14"
                style={{ width: 'auto' }}
              />
            </h1>
            <p className="font-montserrat text-heading text-base mt-1 mb-6">
              Soluble dietary fiber powder
            </p>

            {/* Benefits box */}
            <div className="bg-white rounded-xl p-5 mb-4">
              <p className="font-montserrat font-bold text-heading text-sm mb-3">
                Proven formula for visible results:
              </p>
              <ul className="space-y-2">
                {PRODUCT_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 font-lato text-body text-sm">
                    <span className="text-heading shrink-0 mt-0.5">&#10003;</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Package selector */}
            <div className="bg-white rounded-xl p-5 mb-8">
              <p className="font-montserrat font-bold text-heading text-sm mb-3">
                Choose a package:
              </p>
              <div className="space-y-3 mb-4">
                {PACKAGES.map((pkg) => {
                  const isSelected = pkg.id === selectedPkgId;
                  return (
                    <label
                      key={pkg.id}
                      className={`relative block cursor-pointer rounded-xl border-2 p-4 transition-colors ${
                        isSelected
                          ? 'border-brand bg-linen'
                          : 'border-body/15 bg-white hover:border-brand/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={isSelected}
                        onChange={() => {
                          setSelectedPkgId(pkg.id);
                          setQuantity(1);
                          setShowNotice(false);
                        }}
                        className="sr-only"
                      />

                      {pkg.isRecommended && (
                        <span className="absolute -top-3 left-4 bg-brand text-white text-[10px] font-montserrat font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}

                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-montserrat font-semibold text-heading text-sm">
                            {pkg.label}
                            {pkg.extras && (
                              <span className="text-body font-normal"> {pkg.extras}</span>
                            )}
                          </p>
                          <p className="text-brand text-xs font-semibold mt-0.5">
                            {pkg.discountPercent}% savings
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-body/50 text-xs line-through">
                            {formatRSD(pkg.originalPrice)}
                          </p>
                          <p className="font-montserrat font-bold text-heading text-lg">
                            {formatRSD(pkg.salePrice)}
                          </p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* Quantity selector */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <p className="font-montserrat font-bold text-heading text-sm shrink-0">
                  Adjust number of boxes:
                </p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setQuantity((q) => Math.max(1, q - 1));
                      setShowNotice(false);
                    }}
                    className="w-10 h-10 rounded-full border border-brand text-brand flex items-center justify-center text-xl hover:bg-brand hover:text-white transition-colors"
                  >
                    &minus;
                  </button>
                  <span className="font-montserrat font-bold text-heading text-lg w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuantity((q) => Math.min(10, q + 1));
                      setShowNotice(false);
                    }}
                    className="w-10 h-10 rounded-full border border-brand text-brand flex items-center justify-center text-xl hover:bg-brand hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Order summary */}
              <div className="border-t border-brand pt-5 mb-6 space-y-2 font-lato text-sm">
                <div className="flex justify-between text-body">
                  <span>{quantity}x Crux FiberZ</span>
                  <span>{formatRSD(originalTotal)}</span>
                </div>
                <div className="flex justify-between text-brand font-semibold">
                  <span>Discount</span>
                  <span>-{formatRSD(discount)}</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Shipping</span>
                  <span>{formatRSD(SHIPPING_COST)}</span>
                </div>
                <div className="flex justify-between font-montserrat font-bold text-heading text-base pt-2 border-t border-brand">
                  <span>TOTAL</span>
                  <span>{formatRSD(itemTotal)}</span>
                </div>
              </div>

              {/* ORDER NOW */}
              <button
                type="button"
                onClick={() => setShowNotice(true)}
                className="w-full bg-brand text-white font-montserrat text-xs font-semibold tracking-widest uppercase rounded-full py-4 hover:bg-brand-dark transition-colors"
              >
                Order Now
              </button>

              {showNotice && (
                <div className="mt-4 bg-linen rounded-xl p-4 text-center">
                  <p className="font-montserrat text-heading text-sm font-semibold mb-1">
                    Online ordering is coming soon
                  </p>
                  <p className="font-lato text-body text-sm">
                    To place an order now, contact us at{' '}
                    <a href={`mailto:${COMPANY.email}`} className="text-brand underline">
                      {COMPANY.email}
                    </a>{' '}
                    or call{' '}
                    <a href={`tel:${COMPANY.phoneHref}`} className="text-brand underline">
                      {COMPANY.phone}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
