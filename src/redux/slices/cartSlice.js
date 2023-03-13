import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, action) => {
      state.pizzas = action.payload.pizzas;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;

      localStorage.setItem('pizzas', JSON.stringify({
        pizzas: state.pizzas,
        totalCount: state.totalCount,
        totalPrice: state.totalPrice,
      }));
    }
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;