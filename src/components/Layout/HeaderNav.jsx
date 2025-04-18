import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Cart, User } from '../../assets/icons';
import { modalSlice } from '../../redux/Slice/modalSlice';

function HeaderNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="flex gap-4">
      <button
        type="button"
        key="Cart"
        onClick={() =>
          dispatch(
            modalSlice.actions.openModal({
              modalType: 'side',
              modalProps: {
                title: '장바구니 목록',
                direction: 'right',
              },
            }),
          )
        }
      >
        <img src={Cart} alt="Cart" />
      </button>
      <button type="button" key="User" onClick={() => navigate('/user')}>
        <img src={User} alt="User" />
      </button>
    </nav>
  );
}

export default HeaderNav;
