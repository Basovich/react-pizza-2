import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import {RootState} from "../store";

export interface CartPizzaInterface {
  id: number;
  name: string;
  about: string;
  imageUrl: string;
  typePizza: string;
  sizePizza: number;
  pricePizza: number;
  count: number;
  index?: number;
}

export type CartInterface = {
  pizzas: CartPizzaInterface[]
  totalCount: number
  totalPrice: number
}

const initialState: CartInterface = getCartFromLS();

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

export const selectCart = (state: RootState) => state.cart;

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;