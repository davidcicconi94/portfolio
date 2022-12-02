import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UpdateProps {
  loading: boolean;
  error: boolean;
  message: string | null;
}

interface UserProps {
  name: string;
  email: string;
  password: string;
  skills: string;
  about: string;
}

const initialState: UpdateProps = {
  loading: false,
  error: false,
  message: "",
};

export const updateUser = createAsyncThunk(
  "user/update",
  async ({ name, password, email, skills, about }: UserProps) => {
    try {
      const { data } = await axios.put("http://localhost:3001/admin/update", {
        name,
        password,
        email,
        skills,
        about,
      });
      return data.message;
    } catch (error) {
      return error;
    }
  }
);

export const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
  },
});

export default updateSlice.reducer;
