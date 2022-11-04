import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  password: string;
  projects: Array<string>;
  about: Array<string>;
}

const initialState: UserState = {
  name: "",
  email: "",
  password: "",
  projects: [],
  about: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {},
  },
});

export default userSlice.reducer;
