import { createSlice } from "@reduxjs/toolkit";

// Create a slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    }
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
