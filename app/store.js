import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../fuchers/language/languageSlice";
import popupReducer from "../fuchers/popup/popupSlice";
import resCodeReducer from "../fuchers/resCode/resCodeSlice";
export const store = configureStore({
  reducer: {
    languageReducer: languageReducer,
    popupReducer: popupReducer,
    resCodeReducer: resCodeReducer,
  },
});
