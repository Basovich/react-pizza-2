import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sorts} from "../../utils/staticData";
import { FilterInterface } from './types';

const initialState: FilterInterface = {
  search: '',
  sortType: sorts[0],
  category: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearch: (state: FilterInterface, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    changeSort: (state: FilterInterface, action: PayloadAction<string>) => {
      state.sortType = action.payload
    },
    changeCategoryId: (state: FilterInterface, action: PayloadAction<number>) => {
      state.category = action.payload
    },
    setFilters: (state: FilterInterface, action) => {
      state.search = action.payload.search;
      state.sortType = action.payload.sortType;
      state.category = Number(action.payload.category);
    }
  },
});

export const { changeSearch, changeSort, changeCategoryId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;