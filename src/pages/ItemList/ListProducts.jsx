import ProductCard from '../../components/Card/ProductCard';
import useFetch from '../../utils/hooks/useFetch';

function ListProducts() {
  const url = 'https://api.escuelajs.co/api/v1/categories/4/products';
  const { data = [] } = useFetch(url, { limit: 12, offset: 0 });

  return (
    <div className="my-6 flex flex-wrap justify-center gap-2.5">
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
  );
}

export default ListProducts;
