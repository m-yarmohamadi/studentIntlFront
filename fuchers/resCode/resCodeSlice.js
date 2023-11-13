import { createSlice } from "@reduxjs/toolkit";

export const resCodeSlice = createSlice({
  name: "sequrity",
  initialState: {
    token: "",
  },
  reducers: {
    toggleverifyCode: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { toggleverifyCode, toggleToken } = resCodeSlice.actions;
export default resCodeSlice.reducer;
