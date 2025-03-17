import { useState } from 'react';
import ProductCards from '../../components/Card/ProductCards';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import useFetch from '../../hooks/useFetch';

const MENU_ITEMS = [
  { name: 'New Arrival', id: 2 },
  { name: 'Bestseller', id: 3 },
  { name: 'Featured Product', id: 4 },
];

function Products() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_ITEMS[0].name);

  const category = MENU_ITEMS.find((el) => el.name === selectedMenu);
  const { data, loading } = useFetch(`categories/${category.id}/products`, {
    limit: MAX_LIST_LENGTH.HOME.PRODUCTS,
    offset: 0,
  });

  return (
    <section className="flex flex-col px-2 py-12 sm:px-[8%] md:px-[60px]">
      <MenuTabs selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <ProductCards data={data} loading={loading} />
    </section>
  );
}

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

export default Products;
