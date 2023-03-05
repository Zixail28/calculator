import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const calculatorSlice = createSlice({
  initialState,
  name: "calculator",
  reducers: {
    setText(state, action) {
      return action.payload;
    },
  }
});

export default calculatorSlice.reducer;