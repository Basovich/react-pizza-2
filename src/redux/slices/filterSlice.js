import { createSlice } from '@reduxjs/toolkit';
import {sorts} from "../../config";

const initialState = {
  search: '',
  sortType: sorts[0],
  categoryId: 0
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload
    },
    changeSort: (state, action) => {
      state.sortType = action.payload
    },
    changeCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
  },
});

export const { changeSearch, changeSort, changeCategoryId } = filterSlice.actions;

export default filterSlice.reducer;