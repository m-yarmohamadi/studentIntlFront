import { createSlice } from "@reduxjs/toolkit";

export const resCodeSlice = createSlice({
  name: "sequrity",
  initialState: {
    token: "",
    login: false,
  },
  reducers: {
    toggleToken: (state, action) => {
      state.token = action.payload;
    },
    toggleLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { toggleToken, toggleLogin } = resCodeSlice.actions;
export default resCodeSlice.reducer;
