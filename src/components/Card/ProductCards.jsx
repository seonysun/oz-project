import ProductCard from './ProductCard';

function ProductCards({ productList }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {productList ? (
        productList.map((item) => (
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

export default ProductCards;
