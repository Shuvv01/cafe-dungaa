import MenuSection from '@/components/MenuSection';
import PhysicalMenuBook from '@/components/PhysicalMenuBook';

export const metadata = {
  title: 'Menu'
};

export default function MenuPage() {
  return (
    <div className="pt-20">
      <section className="overflow-hidden bg-espresso py-16 text-white sm:py-20 lg:py-24">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-caramel">Cafe Dungaa</p>
            <h1 className="cafe-font mt-4 text-5xl font-bold sm:text-7xl">Menu</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75 lg:mx-0">
              Browse drinks, Nepali favorites and cafe plates before you visit.
            </p>
          </div>
          <PhysicalMenuBook />
        </div>
      </section>
      <MenuSection />
    </div>
  );
}
