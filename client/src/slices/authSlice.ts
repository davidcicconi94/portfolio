import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface authState {
  loading: boolean;
  isAuthenticated: boolean;
  error: string;
}

const initialState: authState = {
  loading: false,
  isAuthenticated: false,
  error: "",
};

export const login = createAsyncThunk("http://localhost/login", async () => {});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
