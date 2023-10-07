import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "step",
  initialState: {
    step: 1,
  },
  reducers: {
    toggleStep: (state,action) => {
      state.step = action.payload;
    },
  },
});

export const {
    toggleStep,
} = stepSlice.actions;
export default stepSlice.reducer;
