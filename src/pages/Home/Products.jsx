import { Iphone14 } from '../../assets/images/cards';
import ProductCard from '../../components/Card/ProductCard';

function Products() {
  const menuList = ['New Arrival', 'Bestseller', 'Featured Product'];
  const productList = [
    {
      src: Iphone14,
      name: 'product1',
      detail: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
      price: '$1399',
      like: false,
    },
    {
      src: Iphone14,
      name: 'product2',
      detail: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
      price: '$1399',
      like: true,
    },
    {
      src: Iphone14,
      name: 'product3',
      detail: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
      price: '$1399',
      like: false,
    },
    {
      src: Iphone14,
      name: 'product4',
      detail: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
      price: '$1399',
      like: true,
    },
    {
      src: Iphone14,
      name: 'product5',
      detail: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
      price: '$1399',
      like: true,
    },
    {
      src: Iphone14,
      name: 'product6',
      detail: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
      price: '$1399',
      like: false,
    },
  ];

  return (
    <section className="flex flex-col px-2 py-12 sm:px-[8%] md:px-[60px]">
      <ul className="mb-6 flex gap-4 pl-[3.5%]">
        {menuList.map((menu) => (
          <li key={menu} className="font-medium text-[#8B8B8B] sm:text-lg">
            {menu}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-6">
        {productList.map((item) => (
          <ProductCard
            key={item.name}
            src={item.src}
            name={item.name}
            detail={item.detail}
            price={item.price}
            like={item.like}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
