import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
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

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== id
        );
      } else {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;