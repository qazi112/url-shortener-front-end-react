import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "../feature/urls/urlSlice";
import userReducer from "../feature/users/userSlice";

export default configureStore({
  reducer: {
    url: urlReducer,
    user: userReducer,
  },
});
