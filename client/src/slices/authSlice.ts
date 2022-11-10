import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  email: string | null;
  password: string | null;
}

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  message: string | null;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  error: "",
  message: "",
};

export const login = createAsyncThunk("user/login", async (user: object) => {
  const { data } = await axios.post("http://localhost:3001/login", user);
  console.log(data);
  return data;
});

export const logout = createAsyncThunk("user_logout", async () => {
  const { data } = await axios.get("http://localhost:3001/logout");

  return data;
});

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
      })
      .addCase(logout.pending, (state, action) => {
        state.isAuthenticated = true;
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
