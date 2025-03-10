/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import SideModal from './components/Layout/SideModal';
import { modalSlice } from './redux/Slice/modalSlice';

function App() {
  const { isOpen, modalType, modalProps } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <Header />
      {isOpen && modalType === 'side' && (
        <SideModal
          setIsOpen={() => dispatch(modalSlice.actions.closeModal())}
          {...modalProps}
        />
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
