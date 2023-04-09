import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartInterface } from './types';

const initialState: CartInterface = getCartFromLS();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state: CartInterface, action: PayloadAction<CartInterface>) => {
      state.pizzas = action.payload.pizzas;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;

      // TODO: Refactor
      localStorage.setItem('pizzas', JSON.stringify({
        pizzas: action.payload.pizzas,
        totalCount: action.payload.totalCount,
        totalPrice: action.payload.totalPrice,
      }));
    }
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;