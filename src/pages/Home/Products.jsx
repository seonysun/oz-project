import { useState } from 'react';
import ProductCards from '../../components/Card/ProductCards';
import useData from '../../hooks/useData';

const MENU_ITEMS = [
  { name: 'New Arrival', id: 5 },
  { name: 'Bestseller', id: 2 },
  { name: 'Featured Product', id: 3 },
];

function MenuTabs({ selectedMenu, setSelectedMenu }) {
  return (
    <ul className="mb-6 flex gap-7 pl-[3.5%]">
      {MENU_ITEMS.map((menu) => (
        <li key={menu.id}>
          <button
            type="button"
            onClick={() => setSelectedMenu(menu.name)}
            className={` ${selectedMenu === menu.name ? 'font-bold text-black' : 'font-medium text-[#8B8B8B]'} sm:text-lg`}
          >
            {menu.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Products() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_ITEMS[0].name);

  const category = MENU_ITEMS.find((el) => el.name === selectedMenu);
  const url = category ? `categories/${category.id}/products` : null;
  const { data = [], loading } = useData(url, { limit: 8, offset: 0 });

  return (
    <section className="flex flex-col px-2 py-12 sm:px-[8%] md:px-[60px]">
      <MenuTabs selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <ProductCards data={data} loading={loading} />
    </section>
  );
}

export default Products;
