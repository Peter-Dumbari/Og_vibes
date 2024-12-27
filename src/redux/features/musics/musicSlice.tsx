import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musics: [],
  isloading: false,
  error: null,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
