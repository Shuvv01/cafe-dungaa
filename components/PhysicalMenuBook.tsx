'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { menuData, type MenuCategory } from '@/data/menu';

type MenuPage =
  | {
      type: 'intro';
    }
  | {
      type: 'category';
      category: MenuCategory;
    };

const featured = menuData.flatMap((category) =>
  category.items.filter((item) => item.badge).map((item) => ({ ...item, category: category.title }))
);

function MenuPaper({ page, side }: { page: MenuPage; side: 'left' | 'right' }) {
  if (page.type === 'intro') {
    return (
      <div className={`menu-book-page ${side === 'left' ? 'menu-book-page-left' : 'menu-book-page-right'}`}>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-leaf">Cafe Dungaa</p>
        <h2 className="cafe-font mt-3 text-3xl font-bold leading-tight text-espresso">House Specials</h2>
        <div className="mt-6 space-y-4">
          {featured.map((item) => (
            <div key={item.name} className="border-b border-espresso/10 pb-4 last:border-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-espresso">{item.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay">{item.category}</p>
                </div>
                <p className="shrink-0 font-bold text-coffee">Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-auto border-t border-espresso/10 pt-4 text-sm leading-6 text-espresso/65">
          Coffee, comfort plates and calm corners in Jwagal.
        </p>
      </div>
    );
  }

  return (
    <div className={`menu-book-page ${side === 'left' ? 'menu-book-page-left' : 'menu-book-page-right'}`}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-leaf">{page.category.subtitle}</p>
      <h2 className="cafe-font mt-3 text-3xl font-bold leading-tight text-espresso">{page.category.title}</h2>
      <div className="mt-5 space-y-4">
        {page.category.items.map((item) => (
          <div key={item.name} className="border-b border-espresso/10 pb-4 last:border-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold text-espresso">{item.name}</p>
                  {item.badge ? <span className="rounded-md bg-clay/10 px-2 py-1 text-xs font-bold text-clay">{item.badge}</span> : null}
                </div>
                {item.desc ? <p className="mt-2 text-sm leading-5 text-espresso/65">{item.desc}</p> : null}
              </div>
              <p className="shrink-0 font-bold text-coffee">Rs. {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhysicalMenuBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [turnDirection, setTurnDirection] = useState<'forward' | 'back' | null>(null);
  const timers = useRef<number[]>([]);
  const dragStart = useRef<number | null>(null);

  const spreads = useMemo(() => {
    const pages: MenuPage[] = [{ type: 'intro' }, ...menuData.map((category) => ({ type: 'category' as const, category }))];
    const pairs: Array<[MenuPage, MenuPage]> = [];

    for (let index = 0; index < pages.length; index += 2) {
      pairs.push([pages[index], pages[index + 1] ?? { type: 'intro' }]);
    }

    return pairs;
  }, []);

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') turnPage('forward');
      if (event.key === 'ArrowLeft') turnPage('back');
      if (event.key === 'Escape') closeBook();
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  const currentSpread = spreads[spreadIndex];

  function clearTurnTimers() {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }

  function openBook() {
    clearTurnTimers();
    setSpreadIndex(0);
    setTurnDirection(null);
    setIsOpen(true);
  }

  function closeBook() {
    clearTurnTimers();
    setSpreadIndex(0);
    setTurnDirection(null);
    setIsOpen(false);
  }

  function turnPage(direction: 'forward' | 'back') {
    if (turnDirection) return;

    const nextIndex = direction === 'forward' ? spreadIndex + 1 : spreadIndex - 1;
    if (nextIndex < 0 || nextIndex >= spreads.length) return;

    clearTurnTimers();
    setTurnDirection(direction);
    timers.current = [
      window.setTimeout(() => setSpreadIndex(nextIndex), 390),
      window.setTimeout(() => setTurnDirection(null), 820)
    ];
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragStart.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null) return;

    const distance = event.clientX - dragStart.current;
    dragStart.current = null;

    if (Math.abs(distance) < 44) return;
    turnPage(distance < 0 ? 'forward' : 'back');
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="menu-book-stage">
        {!isOpen ? (
          <button type="button" className="menu-book-cover" onClick={openBook} aria-label="Open physical menu book">
            <span className="menu-book-cover-kicker">3D CMS Menu</span>
            <span className="menu-book-cover-mark">Cafe Dungaa</span>
            <span className="menu-book-cover-title cafe-font">Physical Menu</span>
            <span className="menu-book-cover-line">Coffee · Food · Vibes</span>
            <span className="menu-book-cover-button">
              <BookOpen size={18} /> Open Menu
            </span>
          </button>
        ) : (
          <div
            className={`menu-book-spread ${turnDirection ? `is-turning is-turning-${turnDirection}` : ''}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <div className="menu-book-binding" />
            <MenuPaper page={currentSpread[0]} side="left" />
            <MenuPaper page={currentSpread[1]} side="right" />
            <div className="menu-book-crease" />
            {turnDirection ? (
              <div className={`menu-turn-sheet menu-turn-${turnDirection}`} aria-hidden="true">
                <span className="menu-turn-curl" />
                <span className="menu-turn-edge" />
                <span className="menu-turn-shadow" />
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        {isOpen ? (
          <>
            <button
              type="button"
              className="rounded-lg border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white hover:text-espresso disabled:cursor-not-allowed disabled:opacity-35"
              onClick={() => turnPage('back')}
              disabled={spreadIndex === 0 || Boolean(turnDirection)}
              aria-label="Previous menu pages"
              title="Previous pages"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="min-w-16 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white">
              {spreadIndex + 1} / {spreads.length}
            </span>
            <button
              type="button"
              className="rounded-lg border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white hover:text-espresso disabled:cursor-not-allowed disabled:opacity-35"
              onClick={() => turnPage('forward')}
              disabled={spreadIndex === spreads.length - 1 || Boolean(turnDirection)}
              aria-label="Next menu pages"
              title="Next pages"
            >
              <ChevronRight size={20} />
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white hover:text-espresso"
              onClick={closeBook}
              aria-label="Close physical menu book"
              title="Close menu"
            >
              <X size={20} />
            </button>
          </>
        ) : null}
      </div>
      {isOpen ? (
        <div className="mt-4 flex items-center justify-center gap-2" aria-label="Menu page position">
          {spreads.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`menu-book-dot ${index === spreadIndex ? 'is-active' : ''}`}
              aria-label={`Go to menu spread ${index + 1}`}
              onClick={() => {
                if (turnDirection || index === spreadIndex) return;
                setSpreadIndex(index);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
