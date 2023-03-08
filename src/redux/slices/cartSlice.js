import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  totalCount: 0,
  totalPrice: 0,
};

// id: id
// name: ''
// about: ''
// price: ''
// type: ''
// size: ''
// count: ''

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, action) => {
      console.log(action.payload)
      // console.log(typeof action.payload.pizzas[0].count)
      state.pizzas = action.payload.pizzas;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;
    }
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;