import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {baseUrl} from "../../config";

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async ({...params}, thunkAPI) => {
    const { sort, categoryId, searchValue } = params;
    const {data} = await axios.get(`${baseUrl}${sort}${categoryId}${searchValue}`);
    return data;
  }
)

const initialState = {
  pizzas: [],
  status: 'loading'
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = 'loading';
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = 'success';
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = 'error';
    })
  },
});

export const selectPizzas = (state) => state.pizzas;

export default pizzasSlice.reducer;