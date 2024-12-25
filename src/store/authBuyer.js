import { createSlice } from "@reduxjs/toolkit";

// Initial state for buyer login
const initialBuyerState = {
  buyerData: null,  // Use null instead of an array to indicate a single record
};

const buyerAuth = createSlice({
  name: "buyerLogin",
  initialState: initialBuyerState,
  reducers: {
    setBuyerData: (state, action) => {
      state.buyerData = action.payload;  // Correctly set the payload
    },
    clearBuyerData: (state) => {
      state.buyerData = null;  // Reset buyer data on logout
    },
  },
});

export const buyerAuthActions = buyerAuth.actions;
export default buyerAuth.reducer;
