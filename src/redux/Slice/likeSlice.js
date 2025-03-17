import { createSlice } from '@reduxjs/toolkit';

export const likeSlice = createSlice({
  name: 'like',
  initialState: JSON.parse(localStorage.getItem('like')) || [],
  reducers: {
    toggleLike(state, action) {
      const index = state.indexOf(action.payload);

      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }

      localStorage.setItem('like', JSON.stringify(state));
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
