import { Iphone14 } from '../../assets/images/cards';
import ProductCard from '../../components/Card/ProductCard';

function ListProducts() {
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
    <div className="my-6 flex flex-wrap justify-center gap-2.5">
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
  );
}

export default ListProducts;
