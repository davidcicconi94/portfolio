import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState {
  status: string;
  name: string;
  email: string;
  password: string;
  projects: Array<string>;
  about: {
    name: string;
    description: string;
    title: string;
    subtitle: string;
    quote: string;
  };
}

const initialState: UserState = {
  status: "",
  name: "d",
  email: "",
  password: "",
  projects: [],
  about: { name: "", description: "", title: "", subtitle: "", quote: "" },
};

// Obtener usuario
export const getUser = createAsyncThunk("user/about_me", async () => {
  const response = await axios.get("http://localhost:3001/aboutme");

  console.log(response.data.user);

  return response.data.user; // objeto
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        state.about = action.payload.about;
      })
      .addCase(getUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
