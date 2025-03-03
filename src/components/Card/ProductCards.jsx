import ProductCard from './ProductCard';
import useLike from '../../hooks/useLike';

function ProductCards({ data, loading }) {
  const [updatedList, addLike] = useLike(data);

  if (loading) return <p>로딩중...</p>;
  if (!data || data.length === 0)
    return <p className="w-full text-center text-gray-500">상품이 없습니다.</p>;
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {updatedList.map((item) => (
        <ProductCard key={item.id} item={item} addLike={addLike} />
      ))}
    </div>
  );
}

export default ProductCards;
