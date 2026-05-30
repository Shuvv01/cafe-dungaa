import { menuData } from '@/data/menu';
import SectionHeader from './SectionHeader';
import Link from 'next/link';

type MenuSectionProps = {
  compact?: boolean;
};

export default function MenuSection({ compact = false }: MenuSectionProps) {
  const categories = compact ? menuData.slice(0, 2) : menuData;

  return (
    <section className="bg-cream section-y">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Menu"
          title="Made for local taste and daily cravings"
          description="Signature drinks, Nepali favorites, and easy lunch options presented so customers can decide quickly on mobile."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="surface p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">{category.subtitle}</p>
              <h3 className="cafe-font mt-3 text-3xl font-bold text-espresso">{category.title}</h3>

              <div className="mt-6 space-y-5">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-espresso/10 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-espresso">{item.name}</h4>
                          {item.badge ? (
                            <span className="rounded-md bg-clay/10 px-2 py-1 text-xs font-bold text-clay">{item.badge}</span>
                          ) : null}
                        </div>
                        {item.desc ? <p className="mt-2 text-sm leading-6 text-espresso/65">{item.desc}</p> : null}
                      </div>
                      <p className="shrink-0 font-bold text-coffee">Rs. {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {compact ? (
          <div className="mt-10 flex justify-center">
            <Link href="/menu" className="light-button">
              View Full Menu
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
