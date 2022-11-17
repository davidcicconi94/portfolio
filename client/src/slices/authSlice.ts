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
  error: boolean | null;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  message: null,
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
      return thunAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("user_logout", async () => {
  const { data } = await axios.get("http://localhost:3001/logout");

  console.log(data.user);
  return data.user;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearMessage(state) {
      state.message = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
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
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
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

export const { clearError, clearMessage } = authSlice.actions;
export default authSlice.reducer;
