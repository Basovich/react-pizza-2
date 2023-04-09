import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import pizzasReducer from './pizzas/slice';

const persistConfig = {
  key: 'root',
  storage,
}

// const rootReduser = combineReducers({
//   filter: filterReducer,
//   cart: cartReducer,
//   pizzas: pizzasReducer,
// })

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: persistedReducer,
    pizzas: pizzasReducer,
  },
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;