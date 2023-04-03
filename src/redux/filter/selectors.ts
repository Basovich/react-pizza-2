import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;
export const selectCategory = (state: RootState) => state.filter.category;
export const selectSearch = (state: RootState) => state.filter.search;
export const selectSortType = (state: RootState) => state.filter.sortType;