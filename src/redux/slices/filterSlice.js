import { createSlice } from '@reduxjs/toolkit';
import {sorts} from "../../config";

const initialState = {
  search: '',
  sortType: sorts[0],
  categoryId: 0,
  countPage: 0,
  currentPage: 0
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchValue = action.payload
    },
    changeSort: (state, action) => {
      state.sortType = action.payload
    },
    changeCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    changeCountPage: (state, action) => {
      state.countPage = action.payload
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
});

export const {
  changeSearch,
  changeSort,
  changeCategoryId,
  changeCountPage,
  changeCurrentPage
} = filterSlice.actions;

export default filterSlice.reducer;