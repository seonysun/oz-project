import { useDispatch, useSelector } from 'react-redux';
import { Like, LikeRed } from '../../assets/icons';
import useLazyImage from '../../hooks/useLazyImage';
import { cartSlice } from '../../redux/Slice/cartSlice';
import { toggleLike } from '../../redux/Slice/likeSlice';
import Button from '../Button/Button';

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const isLike = useSelector((state) =>
    state.like.some((id) => id === item.id),
  );

  const imgRef = useLazyImage();

  return (
    <div className="flex w-[47%] flex-col items-center rounded-lg bg-[#F6F6F6] px-3 py-6 lg:w-[23%]">
      <button
        type="button"
        onClick={() => dispatch(toggleLike(item.id))}
        className="flex w-full justify-end"
        aria-label="add like"
      >
        <img src={isLike ? LikeRed : Like} alt="like" className="size-8" />
      </button>
      <img
        ref={imgRef}
        src="/src/assets/images/defaultImg.png"
        data-src={item.images}
        alt={item.title}
        onError={(e) => {
          e.currentTarget.src = '/src/assets/images/defaultImg.png';
        }}
        className="w-full p-5"
      />
      <div className="flex h-[88px] w-full flex-col justify-between text-center">
        <p className="line-clamp-2">{item.description}</p>
        <span className="max-w-full truncate text-2xl font-semibold">{`$${item.price.toLocaleString()}`}</span>
      </div>
      <Button
        onClick={() => {
          dispatch(cartSlice.actions.addCart(item));
          alert('상품을 장바구니에 담았습니다');
        }}
        text="Buy Now"
        customSize="mt-2 w-[70%] h-[48px] rounded-md"
      />
    </div>
  );
}

export default ProductCard;
