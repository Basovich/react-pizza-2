import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: []
};

// name: '',
// about: '',
// price: 0,
// count: 0

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const pizzas = state.pizzas;
      console.log(pizzas)
      // pizzas.forEach(elem, index => {
      //   if (elem.name === action.payload.name && elem.price === action.payload.price) {
      //     state.pizzas[index].count = state.pizzas[index].count + 1;
      //   } else {
      //     state.pizzas.push({
      //       ...action.payload,
      //       count: 0
      //     })
      //   }
      // })
    },
    deletePizza: (state, action) => {
      state.pizzas = action.payload
    },
    deleteTypePizzas: (state, action) => {
      state.pizzas = action.payload
    },
    deleteAllPizzas: (state, action) => {
      state.pizzas = action.payload
    }
  },
});

export const { addPizza, deletePizza, deleteTypePizzas, deleteAllPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;