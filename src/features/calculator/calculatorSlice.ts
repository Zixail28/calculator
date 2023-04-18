import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  text: string;
  position: {
    x: number;
    y: number;
  };
} = {text: "", position: {
  x: 0, y: 0,
}};

export const calculatorSlice = createSlice({
  initialState,
  name: "calculator",
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
    setPosition(state, action) {
      state.position = {x: state.position.x + action.payload.x, y: state.position.y + action.payload.y}
    }
  },
});

export default calculatorSlice.reducer;
