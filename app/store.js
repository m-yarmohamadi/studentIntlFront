import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../fuchers/language/languageSlice";
import popupReducer from "../fuchers/popup/popupSlice";
import tokenReducer from "../fuchers/resCode/resCodeSlice";
import stepReducer from "@/fuchers/steps/StepSlice";
import userReducer from "@/fuchers/user/userSlice";

export const store = configureStore({
  reducer: {
    languageReducer: languageReducer,
    popupReducer: popupReducer,
    tokenReducer: tokenReducer,
    stepReducer: stepReducer,
    userReducer: userReducer,
  },
});
