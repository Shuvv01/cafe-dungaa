export type MenuItem = {
  name: string;
  price: number;
  desc?: string;
  badge?: string;
};

export type MenuCategory = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    title: 'Nepali Favorites',
    subtitle: 'Comfort food with local flavors',
    items: [
      { name: 'Dal Bhat Set', price: 420, desc: 'Traditional Nepali thali with rice, dal, seasonal tarkari and pickle.', badge: 'Popular' },
      { name: 'Chicken Momo', price: 280, desc: 'Steamed dumplings served with spicy tomato-sesame chutney.' },
      { name: 'Buff Choila', price: 260, desc: 'Smoky grilled buffalo tossed with spices, onion and fresh herbs.' },
      { name: 'Aloo Tama', price: 180, desc: 'Classic potato and bamboo shoot curry with a tangy finish.' }
    ]
  },
  {
    title: 'Fusion Plates',
    subtitle: 'Cafe specials for lunch and evening hangouts',
    items: [
      { name: 'Nasi Goreng Special', price: 360, desc: 'Indonesian-style fried rice with egg, pickles and satay-inspired seasoning.', badge: 'Signature' },
      { name: 'Spicy Chicken Sandwich', price: 310, desc: 'Toasted bread, crispy chicken, house sauce and fresh salad.' },
      { name: 'Mushroom Cream Pasta', price: 340, desc: 'Creamy pasta with mushroom, garlic and herbs.' },
      { name: 'Loaded Fries', price: 250, desc: 'Crispy fries topped with cheese sauce, herbs and cafe spice mix.' }
    ]
  },
  {
    title: 'Drinks & Sips',
    subtitle: 'Tea, coffee and refreshing cold drinks',
    items: [
      { name: 'Masala Chai', price: 120, desc: 'Milk tea brewed with warming spices.' },
      { name: 'Truffle Butter Coffee', price: 220, desc: 'A rich signature coffee with buttery aroma.', badge: 'Must try' },
      { name: 'Mango Lassi', price: 160, desc: 'Smooth yoghurt drink with mango.' },
      { name: 'Cold Brew', price: 180, desc: 'Slow-brewed coffee served chilled.' }
    ]
  }
];

export const featuredItems = menuData.flatMap((category) => category.items).filter((item) => item.badge);
