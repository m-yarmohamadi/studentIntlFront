import { createSlice } from "@reduxjs/toolkit";

export const resCodeSlice = createSlice({
  name: "sequrity",
  initialState: {
    refreshToken: "",
    accessToken: "",
    login: false,
  },
  reducers: {
    toggleRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    toggleAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    toggleLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { toggleRefreshToken, toggleAccessToken, toggleLogin } =
  resCodeSlice.actions;
export default resCodeSlice.reducer;
