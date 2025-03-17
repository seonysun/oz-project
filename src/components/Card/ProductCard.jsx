import { useDispatch, useSelector } from 'react-redux';
import { Like, LikeRed } from '../../assets/icons';
import { cartSlice } from '../../redux/Slice/cartSlice';
import { toggleLike } from '../../redux/Slice/likeSlice';
import Button from '../Button/Button';

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const isLike = useSelector((state) =>
    state.like.some((id) => id === item.id),
  );

  return (
    <div className="flex h-[352px] w-[163.5px] flex-col items-center justify-between rounded-lg bg-[#F6F6F6] px-3 py-6 md:h-[432px] md:w-[268px]">
      <button
        type="button"
        onClick={() => dispatch(toggleLike(item.id))}
        className="flex w-full justify-end"
        aria-label="add like"
      >
        <img src={isLike ? LikeRed : Like} alt="like" className="size-8" />
      </button>
      <img src={item.images} alt={item.title} className="size-28 md:size-44" />
      <div className="flex h-[88px] w-[139.5px] flex-col justify-between text-center md:w-[236px]">
        <p className="line-clamp-2">{item.description}</p>
        <span className="max-w-full truncate text-2xl font-semibold">{`$${item.price.toLocaleString()}`}</span>
      </div>
      <Button
        onClick={() => {
          dispatch(cartSlice.actions.addCart(item));
          alert('상품을 장바구니에 담았습니다');
        }}
        text="Buy Now"
        customSize="w-[70%] h-[48px] rounded-md"
      />
    </div>
  );
}

export default ProductCard;
