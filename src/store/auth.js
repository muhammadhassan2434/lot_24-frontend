import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};


const auth = createSlice({
  name: "sellerLogin",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const authActions = auth.actions;;
export default auth.reducer;