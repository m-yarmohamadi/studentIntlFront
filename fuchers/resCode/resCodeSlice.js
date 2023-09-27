import { createSlice } from "@reduxjs/toolkit";

export const resCodeSlice = createSlice({
  name: "rescode",
  initialState: {
    verifyCode: "",
    token: "",
  },
  reducers: {
    toggleverifyCode: (state, action) => {
      state.verifyCode = action.payload;
    },
    toggleToken: (state) => {
      state.token = "aabbccwwwwwww";
    },
  },
});

export const { toggleverifyCode, toggleToken } = resCodeSlice.actions;
export default resCodeSlice.reducer;
