import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accesToken: string | null;
}

const initialState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
    },
  },
});

export default authSlice.reducer;
