import ListSkeleton from './ListSkeleton';
import ProductCard from './ProductCard';

function ProductCards({ data, loading, fetching, num, gridLayout }) {
  if (loading) return <ListSkeleton num={num} size={gridLayout} />;

  return (
    <>
      <div className={`${gridLayout}`}>
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {fetching && <ListSkeleton num={num} size={gridLayout} />}
    </>
  );
}

export default ProductCards;
