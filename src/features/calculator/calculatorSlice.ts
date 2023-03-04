import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const calculatorSlice = createSlice({
  initialState,
  name: "calculator",
  reducers: {
    setText(state, action) {
      state = action.payload;
    },
  }
});

export default calculatorSlice.reducer;