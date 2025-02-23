import { useState } from 'react';
import { Like, LikeRed } from '../../assets/icons';
import Button from '../Button/Button';

function ProductCard({ src, name, detail, price, like = false }) {
  const [islike, setIsLike] = useState(like);
  const addLike = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <div className="flex h-[352px] w-[163.5px] flex-col items-center justify-between rounded-lg bg-[#F6F6F6] px-3 py-6 sm:h-[432px] sm:w-[268px]">
      <button
        type="button"
        onClick={addLike}
        className="flex w-full justify-end"
        aria-label="add like"
      >
        <img src={islike ? LikeRed : Like} alt="like" className="size-8" />
      </button>
      <img src={src} alt={name} className="size-28 sm:size-44" />
      <div className="flex h-[88px] w-[139.5px] flex-col justify-between text-center sm:w-[236px]">
        <p className="line-clamp-2">{detail}</p>
        <span className="text-2xl font-semibold">{price}</span>
      </div>
      <Button text="Buy Now" />
    </div>
  );
}

export default ProductCard;
