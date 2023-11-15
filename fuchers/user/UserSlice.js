import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    User: {},
  },
  reducers: {
    toggleUser: (state, action) => {
      state.User = action.payload;
    },
  },
});

export const { toggleUser } = userSlice.actions;
export default userSlice.reducer;
