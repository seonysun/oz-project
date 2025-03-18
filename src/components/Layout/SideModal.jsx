/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../redux/Slice/cartSlice';
import Button from '../Button/Button';

function SideModal({ closeModal, title, direction = 'left' }) {
  const itemList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => closeModal()}
    >
      <div
        className={`fixed top-0 h-full w-64 overflow-y-scroll bg-white transition-transform duration-300 sm:w-96 ${
          direction === 'right'
            ? 'right-0 translate-x-0'
            : 'left-0 -translate-x-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-6 top-6"
          onClick={() => closeModal()}
        >
          X
        </button>
        <div className="p-6">{title}</div>
        <div className="flex flex-col px-3">
          {itemList &&
            itemList.map((item) => (
              <div key={item.id} className="flex gap-2 p-2">
                <img
                  src={item.images}
                  alt={item.title}
                  className="size-28 md:size-44"
                />
                <div className="flex flex-col justify-between py-4">
                  <span className="line-clamp-3">{item.title}</span>
                  <p className="flex justify-between">
                    <span className="text-2xl font-semibold">{`$${item.price.toLocaleString()}`}</span>
                    <Button
                      text="삭제"
                      customSize="p-2 rounded-xl"
                      onClick={() =>
                        dispatch(cartSlice.actions.removeCart(item.id))
                      }
                    />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default SideModal;
