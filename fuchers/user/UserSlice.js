import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    login: false,

  },
  reducers: {
    toggleIdUser: (state, action) => {
      state.id = action.payload;
    },
    toggleFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    toggleLastname: (state, action) => {
      state.lastname = action.payload;
    },
    toggleEmail: (state, action) => {
      state.email = action.payload;
    },
    toggleLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { toggleIdUser,
  toggleFirstname,
  toggleLastname,
  toggleEmail, toggleLogin } = userSlice.actions;
export default userSlice.reducer;
