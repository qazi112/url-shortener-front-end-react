import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users-slice",
  initialState: {
    username: "",
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.token = "";
    },
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { setUserName, setToken, logout, setLogin } = userSlice.actions;
export default userSlice.reducer;
