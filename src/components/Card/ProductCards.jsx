import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductCards({ data, loading }) {
  const [updatedList, setUpdatedList] = useState([]);

  useEffect(() => {
    const storedLikes = new Set(JSON.parse(localStorage.getItem('LIKE')) || []);
    setUpdatedList(
      (data ?? []).map((item) => ({
        ...item,
        like: storedLikes.has(item.id),
      })),
    );
  }, [data]);

  const addLike = (id) => {
    setUpdatedList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const selectedItem = { ...item, like: !item.like };
          const storedLikes = new Set(
            JSON.parse(localStorage.getItem('LIKE')) || [],
          );

          if (selectedItem.like) {
            storedLikes.add(selectedItem.id);
          } else {
            storedLikes.delete(selectedItem.id);
          }

          localStorage.setItem('LIKE', JSON.stringify([...storedLikes]));

          return selectedItem;
        }
        return item;
      }),
    );
  };

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
