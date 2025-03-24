import ProductCard from './ProductCard';

function ProductCards({ data }) {
  if (!data?.length)
    return <p className="w-full text-center text-gray-500">상품이 없습니다.</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductCards;
