import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState {
  status: string;
  name: string | null;
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

export const loadUser = createAsyncThunk("user/load", async (thunAPI) => {
  try {
    const { data } = await axios.get("http://localhost:3001/user");

    return data.user;
  } catch (error: any) {
    return error;
  }
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
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.about.name;
        state.password = action.payload.password;
      })
      .addCase(loadUser.pending, (state, action) => {
        state.status = "pending";
        state.email = "";
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.status = "rejected";
        state.email = "";
      });
  },
});

export default userSlice.reducer;
