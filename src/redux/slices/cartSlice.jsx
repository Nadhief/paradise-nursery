import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (!item) return;

      if (type === "increment") {
        item.quantity += 1;
      }

      if (type === "decrement") {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== id
          );
        } else {
          item.quantity -= 1;
        }
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addItem,
  updateQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;