import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  email: string | null;
  password: string | null;
}

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  message: string | null;
  error: boolean;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  message: "",
  error: false,
};

export const login = createAsyncThunk(
  "user/login",
  async (user: User, thunAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/login", user);
      console.log(data.message);
      return data.message; // welcome back
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunAPI.rejectWithValue(error.response.data.message);
    }
  }
);

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
        state.message = action.payload;
        state.error = false;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.message = action.payload;
        state.error = true;
      })
      .addCase(logout.pending, (state, action) => {
        state.isAuthenticated = true;
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
