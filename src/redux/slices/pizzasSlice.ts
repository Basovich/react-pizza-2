import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {baseUrl} from "../../config";
import {RootState} from "../store";

export interface PizzaInterface {
  id: number;
  name: string;
  about: string;
  imageUrl: string;
  types: string[];
  sizes: number[];
  category: number;
  popular: number;
  price: number;
  prices: Record<string, number[]>;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzasInterface {
  pizzas: PizzaInterface[];
  status: Status;
}

const initialState: PizzasInterface = {
  pizzas: [],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<PizzaInterface[], Record<string, string>>(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { sort, categoryId, searchValue } = params;
    const {data} = await axios.get(`${baseUrl}${sort}${categoryId}${searchValue}`);

    return data;
  }
)

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state: PizzasInterface) => {
      state.pizzas = [];
      state.status = Status.LOADING;
    })

    builder.addCase(fetchPizzas.fulfilled, (state: PizzasInterface, action: PayloadAction<PizzaInterface[]>) => {
      state.pizzas = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchPizzas.rejected, (state: PizzasInterface) => {
      state.pizzas = [];
      state.status = Status.ERROR;
    })
  },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;