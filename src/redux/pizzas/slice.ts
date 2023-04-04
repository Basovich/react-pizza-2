import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from '../../utils/staticData';
import { PizzaInterface, PizzasInterface, Status } from './types';

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

export default pizzasSlice.reducer;