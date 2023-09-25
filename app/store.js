import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../fuchers/language/languageSlice";
import popupReducer from "../fuchers/popup/popupSlice";
export const store = configureStore({
  reducer: {
    languageReducer:languageReducer,
    popupReducer:popupReducer,
  },
});
