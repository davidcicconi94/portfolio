import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import authSlice from "../slices/authSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
