import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './Slice/cartSlice';
import { modalSlice } from './Slice/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
  },
});
