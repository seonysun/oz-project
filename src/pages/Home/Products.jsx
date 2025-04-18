import { useState } from 'react';
import ProductCards from '../../components/Card/ProductCards';
import { MAX_LIST_LENGTH, MENU_ITEMS } from '../../constants/uiData';
import useFetch from '../../hooks/useFetch';

function Products() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_ITEMS[0].name);
  const selectedId = MENU_ITEMS.find((el) => el.name === selectedMenu)?.id;

  const { data, loading } = useFetch(`categories/${selectedId}/products`, {
    limit: MAX_LIST_LENGTH.HOME.PRODUCTS,
    offset: 0,
  });

  return (
    <section className="flex flex-col px-4 py-12 sm:px-[8%] md:px-[10%]">
      <MenuTabs selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <ProductCards
        data={data}
        loading={loading}
        num={MAX_LIST_LENGTH.HOME.PRODUCTS}
        gridLayout="grid grid-cols-2 gap-6 md:grid-cols-4"
      />
    </section>
  );
}

function MenuTabs({ selectedMenu, setSelectedMenu }) {
  return (
    <ul className="mb-6 flex gap-7">
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
