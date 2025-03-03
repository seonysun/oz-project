import { useState, useEffect, useRef } from 'react';

const useLike = (data) => {
  const [updatedList, setUpdatedList] = useState([]);

  const storedLikes = useRef(
    new Set(JSON.parse(localStorage.getItem('LIKE')) || []),
  );

  useEffect(() => {
    setUpdatedList(
      (data ?? []).map((item) => ({
        ...item,
        like: storedLikes.current.has(item.id),
      })),
    );
  }, [data]);

  const addLike = (id) => {
    setUpdatedList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const selectedItem = { ...item, like: !item.like };

          if (selectedItem.like) {
            storedLikes.current.add(item.id);
          } else {
            storedLikes.current.delete(item.id);
          }

          localStorage.setItem(
            'LIKE',
            JSON.stringify([...storedLikes.current]),
          );

          return selectedItem;
        }
        return item;
      }),
    );
  };

  return [updatedList, addLike];
};

export default useLike;
