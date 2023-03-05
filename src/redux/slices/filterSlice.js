import { createSlice } from '@reduxjs/toolkit';
import {sorts} from "../../config";

const initialState = {
  search: '',
  sortType: sorts[0],
  category: null,
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
      state.category = action.payload
    },
    setFilters: (state, action) => {
      state.search = action.payload.search;
      state.sortType = action.payload.sortType;
      state.category = Number(action.payload.category);
    }
  },
});

export const { changeSearch, changeSort, changeCategoryId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;