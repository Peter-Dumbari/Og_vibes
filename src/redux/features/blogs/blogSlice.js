import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  isloading: false,
  error: null,
  message: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers,
  extraReducers,
});

export default blogSlice.reducer;
