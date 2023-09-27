import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    loginPopup: false,
    registerPopup: false,
    verifyCodePopup: false,
  },
  reducers: {
    toggleLoginPopup: (state) => {
      state.loginPopup = !state.loginPopup;
    },
    toggleRegisterPopup: (state) => {
      state.registerPopup = !state.registerPopup;
    },
    toggleVerifyCodePopup: (state) => {
      state.verifyCodePopup = !state.verifyCodePopup;
    },
    toggleLoginToRegisterPopup: (state) => {
      state.loginPopup = !state.loginPopup;
      state.registerPopup = !state.registerPopup;
    },
  },
});

export const {
  toggleLoginPopup,
  toggleRegisterPopup,
  toggleVerifyCodePopup,
  toggleLoginToRegisterPopup,
} = popupSlice.actions;
export default popupSlice.reducer;
