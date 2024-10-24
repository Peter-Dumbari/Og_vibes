import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medias: [],
  isLoading: false,
  error: null,
  message: null,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers,
  extraReducers,
});

export default mediaSlice.reducer;
