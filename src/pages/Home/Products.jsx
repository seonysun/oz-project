import { useState } from 'react';
import ProductCard from '../../components/Card/ProductCard';
import useFetch from '../../utils/hooks/useFetch';

const menuList = [
  { name: 'New Arrival', id: 5 },
  { name: 'Bestseller', id: 2 },
  { name: 'Featured Product', id: 3 },
];

const getUrl = (menu) => {
  const category = menuList.find((el) => el.name === menu);
  return category
    ? `https://api.escuelajs.co/api/v1/categories/${category.id}/products`
    : null;
};

function MenuTabs({ selectedMenu, setSelectedMenu }) {
  return (
    <ul className="mb-6 flex gap-7 pl-[3.5%]">
      {menuList.map((menu) => (
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
  const [selectedMenu, setSelectedMenu] = useState(menuList[0].name);
  const url = getUrl(selectedMenu);
  const { data = [] } = useFetch(url, { limit: 8, offset: 0 });

  return (
    <section className="flex flex-col px-2 py-12 sm:px-[8%] md:px-[60px]">
      <MenuTabs selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="flex flex-wrap justify-center gap-6">
        {data ? (
          data.map((item) => (
            <ProductCard
              key={item.id}
              src={item.images}
              name={item.title}
              detail={item.description}
              price={item.price}
              like={item.like}
            />
          ))
        ) : (
          <p className="w-full text-center text-gray-500">상품이 없습니다.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
