import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    errorPopup: false,
    loginPopup: false,
    registerPopup: false,
    verifyCodePopup: false,
    successRegister: false,
  },
  reducers: {
    toggleSuccessRegister: (state) => {
      state.successRegister = !state.successRegister;
    },
    toggleErrorPopup: (state) => {
      state.errorPopup = !state.errorPopup;
    },
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
  toggleSuccessRegister,
  toggleErrorPopup,
  toggleLoginPopup,
  toggleRegisterPopup,
  toggleVerifyCodePopup,
  toggleLoginToRegisterPopup,
} = popupSlice.actions;
export default popupSlice.reducer;
