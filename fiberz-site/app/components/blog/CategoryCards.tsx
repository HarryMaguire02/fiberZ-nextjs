import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BlogCategory } from '@/content/blog/types';

interface CategoryCardsProps {
  categories: { name: BlogCategory; count: number }[];
}

const CATEGORY_ICONS: Record<BlogCategory, string> = {
  Nutrition: '/category-nutrition.png',
  Digestion: '/icon-microbiota.png',
  Recipes: '/category-recepies.png',
  Health: '/category-health.png',
  Lifestyle: '/category-lifestyle.png',
  Tips: '/category-tips.png',
};

export default async function CategoryCards({ categories }: CategoryCardsProps) {
  const t = await getTranslations('Blog.CategoryCards');

  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 lg:py-16">
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-3">
            {t('title')}
          </h2>
          <p className="font-montserrat text-brand text-sm italic">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/blog?category=${cat.name}`}
              className="bg-linen rounded-2xl p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center gap-3"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                <Image
                  src={CATEGORY_ICONS[cat.name]}
                  alt={cat.name}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-brand text-sm block">
                  {cat.name}
                </span>
                <span className="font-lato text-body text-sm">
                  {t('articleCount', { count: cat.count })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
