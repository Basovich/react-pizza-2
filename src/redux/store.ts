import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import pizzasReducer from './pizzas/slice';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReduser = combineReducers({
  filter: filterReducer,
  cart: cartReducer,
  pizzas: pizzasReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;