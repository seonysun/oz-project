import CardFallback from './CardFallback';
import ProductCard from './ProductCard';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

function ProductCards({ data, loading, fetching }) {
  if (loading) return <CardFallback num={MAX_LIST_LENGTH.LIST.PRODUCTS} />;

  return (
    <>
      <div className="mb-3 flex flex-wrap gap-4">
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {fetching && <CardFallback num={MAX_LIST_LENGTH.LIST.PRODUCTS} />}
    </>
  );
}

export default ProductCards;
