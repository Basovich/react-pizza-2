import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

interface PizzaInterface {
  id: number;
  name: string;
  about: string;
  imageUrl: string;
  typePizza: string;
  sizePizza: number;
  pricePizza: number;
  count: number;
}

export type CartInterface = {
  pizzas: PizzaInterface[]
  totalCount: number
  totalPrice: number
}

const initialState: CartInterface = {
  pizzas: [],
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

      localStorage.setItem('pizzas', JSON.stringify({
        pizzas: state.pizzas,
        totalCount: state.totalCount,
        totalPrice: state.totalPrice,
      }));
    }
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;