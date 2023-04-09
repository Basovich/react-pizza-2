import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CartInterface, CartPizzaInterface } from './types';

const initialState: CartInterface = {
  pizzas: [] as CartPizzaInterface[],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state: CartInterface, action: PayloadAction<CartInterface>) => {
      state.pizzas = action.payload.pizzas;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;
    }
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;