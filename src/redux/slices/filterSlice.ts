import { createSlice } from '@reduxjs/toolkit';
import {sorts} from "../../config";
import {RootState} from "../store";

interface FilterInterface {
  search: string
  sortType: string
  category: number
}

const initialState: FilterInterface = {
  search: '',
  sortType: sorts[0],
  category: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearch: (state: FilterInterface, action) => {
      state.search = action.payload
    },
    changeSort: (state: FilterInterface, action) => {
      state.sortType = action.payload
    },
    changeCategoryId: (state: FilterInterface, action) => {
      state.category = action.payload
    },
    setFilters: (state: FilterInterface, action) => {
      state.search = action.payload.search;
      state.sortType = action.payload.sortType;
      state.category = Number(action.payload.category);
    }
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectCategory = (state: RootState) => state.filter.category;
export const selectSearch = (state: RootState) => state.filter.search;
export const selectSortType = (state: RootState) => state.filter.sortType;

export const { changeSearch, changeSort, changeCategoryId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;