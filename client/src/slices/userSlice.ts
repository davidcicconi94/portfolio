import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState {
  status: string;
  name: string;
  email: string;
  password: string;
  projects: Array<any>;
  about: {
    name: string;
    description: string;
    title: string;
    quote: string;
  };
}

const initialState: UserState = {
  status: "",
  name: "",
  email: "",
  password: "",
  projects: [{ title: "", url: "", description: "", techStack: "" }],
  about: { name: "", description: "", title: "", quote: "" },
};

// Obtener usuario
export const getProfileInfo = createAsyncThunk("user/about_me", async () => {
  const response = await axios.get("http://localhost:3001/aboutme");

  return response.data.user; // objeto
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.about = action.payload.about;
        state.projects = action.payload.projects;
      })
      .addCase(getProfileInfo.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProfileInfo.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
