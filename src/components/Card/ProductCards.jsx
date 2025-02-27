import ProductCard from './ProductCard';

function ProductCards({ data, loading }) {
  if (loading) return <p>로딩중...</p>;
  if (!data || data.length === 0)
    return <p className="w-full text-center text-gray-500">상품이 없습니다.</p>;
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          src={item.images}
          name={item.title}
          detail={item.description}
          price={item.price}
          like={item.like}
        />
      ))}
    </div>
  );
}

export default ProductCards;
